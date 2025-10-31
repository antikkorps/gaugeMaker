<template>
  <div class="control-panel">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Gauge Configuration</h2>

    <!-- Basic Settings -->
    <div class="space-y-4 mb-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"> Title </label>
        <input
          v-model="config.title"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter gauge title"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"> Unit </label>
        <input
          v-model="config.unit"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., %, km/h, °C"
        />
      </div>
    </div>

    <!-- Value Settings -->
    <div class="space-y-4 mb-6">
      <h3 class="text-lg font-semibold text-gray-800">Value Range</h3>

      <div class="grid grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Min </label>
          <input
            v-model.number="config.min"
            type="number"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            @change="validateRange"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Current </label>
          <input
            v-model.number="config.value"
            type="number"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :min="config.min"
            :max="config.max"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Max </label>
          <input
            v-model.number="config.max"
            type="number"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            @change="validateRange"
          />
        </div>
      </div>

      <!-- Value Slider -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"> Adjust Value </label>
        <input
          v-model="config.value"
          type="range"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          :min="config.min"
          :max="config.max"
        />
        <div class="flex justify-between text-xs text-gray-600 px-2 mt-1">
          <span>{{ config.min }}</span>
          <span>{{ config.max }}</span>
        </div>
      </div>
    </div>

    <!-- Appearance Settings -->
    <div class="space-y-4 mb-6">
      <h3 class="text-lg font-semibold text-gray-800">Appearance</h3>

      <!-- Color Mode Selection -->
      <div class="flex items-center mb-4">
        <input
          v-model="config.useGradient"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <label class="ml-2 text-sm font-medium text-gray-700"> Use Multi-Color Segments </label>
      </div>

      <!-- Single Color Mode -->
      <div v-if="!config.useGradient" class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Gauge Color </label>
          <input
            v-model="config.color"
            type="color"
            class="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Background Color </label>
          <input
            v-model="config.backgroundColor"
            type="color"
            class="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <!-- Multi-Color Mode -->
      <div v-else class="space-y-3">
        <div class="flex justify-between items-center">
          <label class="text-sm font-medium text-gray-700">Color Ranges</label>
          <button
            @click="addNewColorRange"
            class="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors"
          >
            Add Range
          </button>
        </div>

        <div
          v-for="(range, index) in config.colorRanges"
          :key="index"
          class="border border-gray-200 rounded-lg p-3 space-y-2"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-700">Range {{ index + 1 }}</span>
            <button
              v-if="config.colorRanges.length > 1"
              @click="removeColorRange(index)"
              class="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>

          <div class="grid grid-cols-3 gap-2">
            <div>
              <label class="block text-xs text-gray-600 mb-1">Start</label>
              <input
                v-model.number="range.start"
                type="number"
                class="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                @change="updateColorRange(index, range)"
              />
            </div>
            <div>
              <label class="block text-xs text-gray-600 mb-1">End</label>
              <input
                v-model.number="range.end"
                type="number"
                class="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                @change="updateColorRange(index, range)"
              />
            </div>
            <div>
              <label class="block text-xs text-gray-600 mb-1">Color</label>
              <input
                v-model="range.color"
                type="color"
                class="w-full h-8 border border-gray-300 rounded cursor-pointer"
                @change="updateColorRange(index, range)"
              />
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Background Color </label>
          <input
            v-model="config.backgroundColor"
            type="color"
            class="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"> Size (px) </label>
        <input
          v-model.number="config.size"
          type="range"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          min="200"
          max="600"
          step="10"
        />
        <div class="text-center text-sm text-gray-600 mt-1">{{ config.size }}px</div>
      </div>

      <div class="flex items-center">
        <input
          v-model="config.showDetail"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <label class="ml-2 text-sm font-medium text-gray-700"> Show Details </label>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex gap-4">
      <button @click="exportGauge" class="export-button flex-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Export as PNG
      </button>

      <button
        @click="resetConfig"
        class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGauge } from '@/composables/useGauge'

// Use gauge composable
const { config, exportAsPNG, resetConfig, addColorRange, removeColorRange, updateColorRange } =
  useGauge()

/**
 * Validate range values
 */
const validateRange = () => {
  if (config.min >= config.max) {
    config.min = 0
    config.max = 100
  }

  // Ensure current value is within range
  config.value = Math.max(config.min, Math.min(config.max, config.value))
}

/**
 * Add a new color range
 */
const addNewColorRange = () => {
  const lastRange = config.colorRanges[config.colorRanges.length - 1]
  const newStart = lastRange ? lastRange.end : config.max
  const newEnd = Math.min(newStart + 20, config.max)

  addColorRange(newStart, newEnd, '#3b82f6')
}

/**
 * Export gauge as PNG
 */
const exportGauge = () => {
  const filename = `${config.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.png`
  exportAsPNG(filename)
}
</script>
