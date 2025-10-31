import { ref, computed, reactive } from 'vue'
import type { GaugeConfig, ColorRange } from '@/types/gauge'
import { defaultGaugeConfig } from '@/types/gauge'
import * as echarts from 'echarts'

// Shared state (singleton pattern)
const config = reactive<GaugeConfig>({ ...defaultGaugeConfig })
const chartInstance = ref<echarts.ECharts | null>(null)
const containerRef = ref<HTMLElement | null>(null)

/**
 * Composable for managing gauge chart state and operations
 * Uses singleton pattern to share state between components
 */
export function useGauge() {
  /**
   * Generate axis line colors based on color ranges
   * Format: [[position, color], [position, color], ...]
   * Position is a normalized value between 0 and 1
   */
  const axisLineColors = computed(() => {
    if (config.useGradient && config.colorRanges.length > 0) {
      // Sort ranges by start value
      const sortedRanges = [...config.colorRanges].sort((a, b) => a.start - b.start)

      const colors: [number, string][] = []

      sortedRanges.forEach((range, index) => {
        const startPos = (range.start - config.min) / (config.max - config.min)
        const endPos = (range.end - config.min) / (config.max - config.min)

        // If there's a gap before this range, fill with gray
        if (index === 0 && startPos > 0) {
          colors.push([0, '#e5e7eb'])
          colors.push([startPos, '#e5e7eb'])
        }

        // Add the color range
        colors.push([startPos, range.color])
        colors.push([endPos, range.color])

        // If there's a gap after this range, fill with gray
        if (index === sortedRanges.length - 1 && endPos < 1) {
          colors.push([endPos, '#e5e7eb'])
          colors.push([1, '#e5e7eb'])
        } else if (index < sortedRanges.length - 1) {
          const nextRange = sortedRanges[index + 1]
          if (nextRange) {
            const nextStart = (nextRange.start - config.min) / (config.max - config.min)
            if (endPos < nextStart) {
              colors.push([endPos, '#e5e7eb'])
              colors.push([nextStart, '#e5e7eb'])
            }
          }
        }
      })

      return colors.length > 0 ? colors : [[1, config.color]]
    }
    return [[1, config.color]]
  })

  /**
   * Get current color based on value
   */
  const getCurrentColor = computed(() => {
    if (config.useGradient && config.colorRanges.length > 0) {
      const range = config.colorRanges.find((r) => config.value >= r.start && config.value <= r.end)
      return range?.color || config.color
    }
    return config.color
  })

  /**
   * Generate ECharts option based on current configuration
   */
  const chartOption = computed(() => ({
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '70%'],
        radius: '90%',
        min: config.min,
        max: config.max,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 18,
            color: axisLineColors.value,
          },
        },
        pointer: {
          itemStyle: {
            color: getCurrentColor.value,
          },
          length: '70%',
          width: 5,
        },
        axisTick: {
          distance: -18,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        splitLine: {
          distance: -18,
          length: 18,
          lineStyle: {
            color: '#fff',
            width: 3,
          },
        },
        axisLabel: {
          color: 'inherit',
          distance: 25,
          fontSize: 14,
        },
        detail: {
          valueAnimation: true,
          formatter: (value: number) => {
            return `{value|${value}}{unit|${config.unit}}`
          },
          rich: {
            value: {
              fontSize: 40,
              fontWeight: 'bold',
              color: getCurrentColor.value,
              padding: [50, 0, 0, 0], // top, right, bottom, left
            },
            unit: {
              fontSize: 20,
              color: getCurrentColor.value,
              padding: [50, 0, 0, 10], // top, right, bottom, left
            },
          },
          offsetCenter: [0, '-5%'],
        },
        title: {
          show: config.showDetail,
          fontSize: 16,
          color: '#464646',
          offsetCenter: [0, '35%'],
        },
        data: [
          {
            value: config.value,
            name: config.title,
          },
        ],
      },
    ],
  }))

  /**
   * Initialize chart instance
   */
  const initChart = () => {
    if (!containerRef.value) return

    // Dispose existing chart if any
    if (chartInstance.value) {
      chartInstance.value.dispose()
      chartInstance.value = null
    }

    // Ensure container has proper dimensions
    if (containerRef.value.clientWidth === 0 || containerRef.value.clientHeight === 0) {
      // Set explicit dimensions if not already set
      containerRef.value.style.width = config.size + 'px'
      containerRef.value.style.height = config.size * 0.75 + 'px'
    }

    // Initialize new chart
    chartInstance.value = echarts.init(containerRef.value)

    // Update chart with current options
    updateChart()
  }

  /**
   * Update chart with current configuration
   */
  const updateChart = () => {
    if (!chartInstance.value) return

    // Set new options with notMerge to force complete refresh
    chartInstance.value.setOption(chartOption.value, true)

    // Force resize to ensure proper rendering
    setTimeout(() => {
      chartInstance.value?.resize()
    }, 50)
  }

  /**
   * Export chart as PNG
   */
  const exportAsPNG = (filename?: string) => {
    if (!chartInstance.value) return null

    const url = chartInstance.value.getDataURL({
      type: 'png',
      pixelRatio: 2,
      backgroundColor: '#fff',
    })

    // Create download link
    const link = document.createElement('a')
    link.download = filename || `gauge-${Date.now()}.png`
    link.href = url
    link.click()

    return url
  }

  /**
   * Update gauge value
   */
  const updateValue = (value: number) => {
    config.value = Math.max(config.min, Math.min(config.max, value))
    updateChart()
  }

  /**
   * Add a new color range
   */
  const addColorRange = (start: number, end: number, color: string) => {
    config.colorRanges.push({ start, end, color })
    config.colorRanges.sort((a: ColorRange, b: ColorRange) => a.start - b.start)
    updateChart()
  }

  /**
   * Remove a color range by index
   */
  const removeColorRange = (index: number) => {
    if (config.colorRanges.length > 1) {
      config.colorRanges.splice(index, 1)
      updateChart()
    }
  }

  /**
   * Update a color range
   */
  const updateColorRange = (index: number, range: Partial<ColorRange>) => {
    if (config.colorRanges[index]) {
      Object.assign(config.colorRanges[index], range)
      config.colorRanges.sort((a: ColorRange, b: ColorRange) => a.start - b.start)
      updateChart()
    }
  }

  /**
   * Reset to default configuration
   */
  const resetConfig = () => {
    Object.assign(config, defaultGaugeConfig)
    updateChart()
  }

  /**
   * Dispose chart instance
   */
  const disposeChart = () => {
    if (chartInstance.value) {
      chartInstance.value.dispose()
      chartInstance.value = null
    }
  }

  return {
    config,
    chartOption,
    containerRef,
    chartInstance,
    initChart,
    updateChart,
    exportAsPNG,
    updateValue,
    resetConfig,
    addColorRange,
    removeColorRange,
    updateColorRange,
    disposeChart,
  }
}
