<script setup lang="ts">
import GaugeChart from '@/components/GaugeChart.vue'
import ControlPanel from '@/components/ControlPanel.vue'
import BuyMeACoffee from '@/components/BuyMeACoffee.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-gray-100 shadow-lg">
      <div class="container mx-auto px-4 py-3 md:py-4">
        <div class="flex justify-between items-center gap-2">
          <h1 class="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">🎯 Gauge Maker</h1>
          <div class="flex items-center gap-2 sm:gap-3">
            <BuyMeACoffee username="fvienot" text="Support" variant="compact" />
            <div class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold sm:px-3 sm:text-sm">
              v1.0.0
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-6 md:py-8">
      <div class="grid grid-cols-1 gap-4 items-start md:gap-6 lg:grid-cols-2 lg:gap-8">
        <!-- Gauge Preview - Sticky -->
        <div class="bg-gray-100 rounded-xl shadow-xl p-4 md:p-6 lg:sticky lg:top-8">
          <h2 class="text-lg font-bold text-gray-800 mb-3 md:text-xl md:mb-4">Live Preview</h2>
          <div class="flex justify-center items-center">
            <GaugeChart />
          </div>
        </div>

        <!-- Control Panel -->
        <div class="bg-gray-100 rounded-xl shadow-xl p-4 md:p-6">
          <ControlPanel />
        </div>
      </div>

      <!-- Features Section -->
      <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:mt-12">
        <div class="bg-gray-100 rounded-lg shadow-lg p-4 text-center md:p-6">
          <div class="text-3xl mb-3 md:text-4xl md:mb-4">⚡</div>
          <h3 class="text-base font-bold text-gray-800 mb-2 md:text-lg">Real-time Updates</h3>
          <p class="text-sm text-gray-600 md:text-base">See changes instantly as you adjust the gauge settings</p>
        </div>

        <div class="bg-gray-100 rounded-lg shadow-lg p-4 text-center md:p-6">
          <div class="text-3xl mb-3 md:text-4xl md:mb-4">🎨</div>
          <h3 class="text-base font-bold text-gray-800 mb-2 md:text-lg">Customizable</h3>
          <p class="text-sm text-gray-600 md:text-base">Customize colors, sizes, ranges, and more</p>
        </div>

        <div class="bg-gray-100 rounded-lg shadow-lg p-4 text-center md:p-6 sm:col-span-2 md:col-span-1">
          <div class="text-3xl mb-3 md:text-4xl md:mb-4">💾</div>
          <h3 class="text-base font-bold text-gray-800 mb-2 md:text-lg">Export Ready</h3>
          <p class="text-sm text-gray-600 md:text-base">Download your gauge as high-quality PNG image</p>
        </div>
      </div>
    </main>

    <!-- Support Section -->
    <section class="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 overflow-hidden md:py-16 lg:py-20">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob md:w-48 md:h-48 lg:w-64 lg:h-64"></div>
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 md:w-48 md:h-48 lg:w-64 lg:h-64"></div>
      <div class="absolute bottom-0 left-1/2 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 md:w-48 md:h-48 lg:w-64 lg:h-64"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-8 md:mb-12">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg mb-4 transform hover:rotate-6 transition-transform md:w-20 md:h-20 md:mb-6">
              <svg class="w-8 h-8 text-white md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3 md:text-3xl lg:text-4xl md:mb-4">
              Love This Tool?
            </h2>
            <p class="text-base text-gray-600 max-w-2xl mx-auto md:text-lg lg:text-xl">
              Help keep it free and awesome for everyone
            </p>
          </div>

          <!-- Content Cards -->
          <div class="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:mb-10">
            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow md:p-6">
              <div class="text-3xl mb-2 md:text-4xl md:mb-3">🚀</div>
              <h3 class="font-bold text-gray-800 mb-1 md:mb-2">New Features</h3>
              <p class="text-gray-600 text-xs md:text-sm">Your support helps me add cool new features and improvements</p>
            </div>

            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow md:p-6">
              <div class="text-3xl mb-2 md:text-4xl md:mb-3">🐛</div>
              <h3 class="font-bold text-gray-800 mb-1 md:mb-2">Bug Fixes</h3>
              <p class="text-gray-600 text-xs md:text-sm">Keep the tool running smoothly and fix issues quickly</p>
            </div>

            <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow md:p-6 sm:col-span-2 md:col-span-1">
              <div class="text-3xl mb-2 md:text-4xl md:mb-3">⚡</div>
              <h3 class="font-bold text-gray-800 mb-1 md:mb-2">Performance</h3>
              <p class="text-gray-600 text-xs md:text-sm">Continuous improvements for a better experience</p>
            </div>
          </div>

          <!-- CTA Card -->
          <div class="bg-white rounded-2xl shadow-2xl p-6 text-center md:p-8">
            <p class="text-base text-gray-700 mb-4 md:text-lg md:mb-6">
              Every coffee fuels my creativity and keeps me coding late into the night.
              <span class="font-semibold text-purple-600">Your support means the world!</span>
            </p>
            <BuyMeACoffee username="fvienot" />
            <p class="text-xs text-gray-500 mt-3 md:text-sm md:mt-4">
              Or visit <a href="https://buymeacoffee.com/fvienot" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:text-purple-700 font-medium underline">buymeacoffee.com/fvienot</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-100 text-gray-800 py-6 md:py-10">
      <div class="container mx-auto px-4 text-center">
        <p class="font-bold mb-2 text-sm md:text-base">
          Gauge Maker
          <br />
          Built with Vue.js, ECharts, Tailwind CSS
        </p>
        <p class="text-gray-600 text-xs md:text-base">Copyright © 2025 - All rights reserved</p>
      </div>
    </footer>
  </div>
</template>
