<template>
  <section class="bg-white py-20">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <!-- Badge -->
      <div
        class="inline-block mb-6 px-4 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
      >
        🚀 Web Development • Nuxt • Tailwind • JavaScript
      </div>

      <!-- Main Heading -->
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Building Modern Web Experiences
      </h1>

      <!-- Description -->
      <p class="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Tutorials, insights, and practical guides on building fast, scalable
        applications using modern frontend technologies.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-10 flex justify-center gap-4 flex-wrap">
        <NuxtLink
          to="/blog"
          class="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          Read Articles
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          About Me
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
