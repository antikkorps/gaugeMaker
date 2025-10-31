import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import GaugeChart from '@/components/GaugeChart.vue'
import { useGauge } from '@/composables/useGauge'

// Mock ECharts
const mockChart = {
  setOption: vi.fn(),
  dispose: vi.fn(),
  clear: vi.fn(),
  getDataURL: vi.fn(() => 'data:image/png;base64,mock'),
  resize: vi.fn(),
}

vi.mock('echarts', () => ({
  init: vi.fn(() => mockChart),
  default: {
    init: vi.fn(() => mockChart),
  },
}))

describe('GaugeChart', () => {
  beforeEach(() => {
    // Mock DOM methods
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', { value: 300 })
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { value: 300 })
  })

  it('renders correctly', () => {
    const wrapper = mount(GaugeChart)
    expect(wrapper.find('.gauge-container').exists()).toBe(true)
  })
})

describe('useGauge composable', () => {
  beforeEach(() => {
    // Reset DOM before each test
    document.body.innerHTML = ''
  })

  it('initializes with default configuration', () => {
    const { config } = useGauge()

    expect(config.value).toBe(65)
    expect(config.min).toBe(0)
    expect(config.max).toBe(100)
    expect(config.title).toBe('Speed')
    expect(config.unit).toBe('km/h')
  })

  it('updates value within range', () => {
    const { config, updateValue } = useGauge()

    updateValue(75)
    expect(config.value).toBe(75)

    // Test bounds
    updateValue(-10)
    expect(config.value).toBe(0)

    updateValue(150)
    expect(config.value).toBe(100)
  })

  it('resets to default configuration', () => {
    const { config, resetConfig } = useGauge()

    // Modify config
    config.value = 80
    config.title = 'Test Gauge'
    config.useGradient = false

    // Reset
    resetConfig()

    expect(config.value).toBe(65)
    expect(config.title).toBe('Speed')
    expect(config.useGradient).toBe(true)
  })

  it('manages color ranges correctly', () => {
    const { config, addColorRange, removeColorRange, updateColorRange } = useGauge()

    // Add new color range
    addColorRange(100, 120, '#ff0000')
    expect(config.colorRanges).toHaveLength(4)

    // Update color range
    updateColorRange(0, { color: '#00ff00' })
    expect(config.colorRanges[0]?.color).toBe('#00ff00')

    // Remove color range
    removeColorRange(0)
    expect(config.colorRanges).toHaveLength(3)
  })

  it('toggles gradient mode', () => {
    const { config } = useGauge()

    config.useGradient = true
    expect(config.useGradient).toBe(true)

    config.useGradient = false
    expect(config.useGradient).toBe(false)
  })
})
