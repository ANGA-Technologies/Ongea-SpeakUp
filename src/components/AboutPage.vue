<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="pt-20 pb-16 bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-white text-center">About ONGEA</h1>
      </div>
    </div>
    <div class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-lg text-gray-700 mb-8">
          ONGEA is a premier leadership training organization dedicated to developing the next generation of leaders.
        </p>
        <p class="text-lg text-gray-700">
          Our mission is to empower individuals and organizations with the skills and mindset needed to lead effectively in today's dynamic world.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
</script>
