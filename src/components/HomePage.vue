<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <CoreValues />
    <Services />
    <Team />
    <Clients />
    <Blog />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';
import Hero from './HeroSection.vue';
import CoreValues from './CoreValues.vue';
import Services from './ServicesPage.vue';
import Team from './TeamPage.vue';
import Clients from './ClientsPage.vue';
import Blog from './Blog.vue';
import Contact from './ContactPage.vue';
import Footer from './FooterSection.vue';
</script>
