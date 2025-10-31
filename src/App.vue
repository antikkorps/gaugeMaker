<script setup lang="ts">
import GaugeChart from '@/components/GaugeChart.vue'
import ControlPanel from '@/components/ControlPanel.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-gray-100 shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">🎯 Gauge Maker</h1>
          <div class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            v1.0.0
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Gauge Preview -->
        <div class="bg-gray-100 rounded-xl shadow-xl p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Live Preview</h2>
          <div class="flex justify-center items-center">
            <GaugeChart />
          </div>
        </div>

        <!-- Control Panel -->
        <div class="bg-gray-100 rounded-xl shadow-xl p-6">
          <ControlPanel />
        </div>
      </div>

      <!-- Features Section -->
      <div class="mt-12 grid md:grid-cols-3 gap-6">
        <div class="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Real-time Updates</h3>
          <p class="text-gray-600">See changes instantly as you adjust the gauge settings</p>
        </div>

        <div class="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
          <div class="text-4xl mb-4">🎨</div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Customizable</h3>
          <p class="text-gray-600">Customize colors, sizes, ranges, and more</p>
        </div>

        <div class="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
          <div class="text-4xl mb-4">💾</div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Export Ready</h3>
          <p class="text-gray-600">Download your gauge as high-quality PNG image</p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-gray-800 py-10 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p class="font-bold mb-2">
          Gauge Maker
          <br />
          Built with Vue.js, ECharts, Tailwind CSS
        </p>
        <p class="text-gray-600">Copyright © 2024 - All rights reserved</p>
      </div>
    </footer>
  </div>
</template>
