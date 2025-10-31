<template>
  <div class="gauge-container w-full flex justify-center items-center">
    <div
      ref="containerRef"
      :style="{ width: config.size + 'px', height: config.size * 0.75 + 'px' }"
      class="chart-container"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch, ref, nextTick } from 'vue'
import { useGauge } from '@/composables/useGauge'

// Use gauge composable
const { config, containerRef, initChart, updateChart, disposeChart } = useGauge()

// Initialize chart on mount
onMounted(() => {
  // Small delay to ensure DOM is ready
  nextTick(() => {
    initChart()
  })

  // Handle window resize
  window.addEventListener('resize', updateChart)
})

// Cleanup on unmount
onUnmounted(() => {
  window.removeEventListener('resize', updateChart)
  disposeChart()
})

// Watch for configuration changes (excluding size)
watch(
  () => [
    config.value,
    config.min,
    config.max,
    config.title,
    config.unit,
    config.color,
    config.backgroundColor,
    config.showDetail,
    config.useGradient,
    JSON.stringify(config.colorRanges),
  ],
  () => {
    updateChart()
  },
  { deep: true },
)

// Watch for size changes separately to handle resize
watch(
  () => config.size,
  () => {
    // Reinitialize on size change for proper dimensions
    disposeChart()
    nextTick(() => {
      initChart()
    })
  },
)
</script>

<style scoped>
.chart-container {
  transition: all 0.3s ease;
}
</style>
