<template>
  <div class="relative min-h-screen flex items-center">
    <div
      class="absolute inset-0 z-0"
      style="
        background-image: url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80);
        background-size: cover;
        background-position: center;
      "
    >
      <div class="absolute inset-0 bg-black opacity-70"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
        Empowering Future <span class="text-maroon-500">Leaders</span> Today!
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        We are an assertive innovation to the world, a generous hub of excellence.
        Join us in developing the next generation of leaders.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <button class="group bg-maroon-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-maroon-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-maroon-600/30 inline-flex items-center justify-center">
          Join Our Training Now
          <ArrowRight class="ml-2 group-hover:translate-x-1 transition-transform duration-300" :size="20" />
        </button>
        <button class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-maroon-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-white/30">
          Learn More
        </button>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>
