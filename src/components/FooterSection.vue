<template>
  <footer class="bg-black pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div class="lg:col-span-2">
          <h2 class="text-3xl font-bold text-white mb-6">
            ON<span class="text-maroon-500">GEA</span>
          </h2>
          <p class="text-gray-400 mb-8 max-w-md">
            Empowering future leaders through comprehensive training and development programs.
            Join us in creating a generation of confident and effective leaders.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6">Company</h3>
          <ul class="space-y-4">
            <li v-for="item in navigation.company" :key="item.name">
              <a
                :href="item.href"
                class="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6">Services</h3>
          <ul class="space-y-4">
            <li v-for="item in navigation.services" :key="item.name">
              <a
                :href="item.href"
                class="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6">Resources</h3>
          <ul class="space-y-4">
            <li v-for="item in navigation.resources" :key="item.name">
              <a
                :href="item.href"
                class="text-gray-400 hover:text-maroon-500 transition-colors duration-300"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} ONGEA Leadership Training. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="#privacy" class="text-gray-400 hover:text-maroon-500 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" class="text-gray-400 hover:text-maroon-500 text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-vue-next';

const navigation = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Corporate Training', href: '#services' },
    { name: 'Leadership Programs', href: '#programs' },
    { name: 'Consultation', href: '#services' },
    { name: 'Events', href: '#services' },
  ],
  resources: [
    { name: 'Blog', href: '#blog' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#clients' },
    { name: 'FAQs', href: '#faqs' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ],
};
</script>
