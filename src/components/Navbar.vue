<script setup>
import { ref } from 'vue';
import { Menu, X } from 'lucide-vue-next';

const isOpen = ref(false);

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Programs', href: '#programs' },
  { name: 'Team', href: '#team' },
  { name: 'Clients', href: '#clients' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 w-full bg-black/90 backdrop-blur-sm shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-3xl font-bold text-white">
              ON<span class="text-maroon-500">GEA</span>
            </h1>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-6">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-gray-300 hover:text-maroon-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              {{ item.name }}
            </a>
            <button class="bg-maroon-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-maroon-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-maroon-600/20">
              Register Now
            </button>
          </div>
        </div>
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-maroon-500 focus:outline-none"
          >
            <component :is="isOpen ? X : Menu" size="24" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden animate-slide-down">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-300 hover:text-maroon-500 block px-3 py-2 text-base font-medium transition-colors duration-300"
        >
          {{ item.name }}
        </a>
        <button class="w-full bg-maroon-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-maroon-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-maroon-600/20 mt-4">
          Register Now
        </button>
      </div>
    </div>
  </nav>
</template>
