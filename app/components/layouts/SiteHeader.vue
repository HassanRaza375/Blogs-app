<template>
  <header
    class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
          MyBlog
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </nav>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <button class="p-2 rounded-lg hover:bg-gray-100 transition">
            🔍
          </button>

          <!-- CTA -->
          <NuxtLink
            to="/subscribe"
            class="hidden sm:inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Subscribe
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            ☰
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden border-t border-gray-200 bg-white">
      <nav class="px-4 py-4 space-y-3">
        <NuxtLink to="/" class="mobile-link">Home</NuxtLink>
        <NuxtLink to="/blog" class="mobile-link">Blog</NuxtLink>
        <NuxtLink to="/about" class="mobile-link">About</NuxtLink>
        <NuxtLink to="/contact" class="mobile-link">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-black transition font-medium;
}

.mobile-link {
  @apply block text-gray-700 hover:text-black transition font-medium;
}
</style>
