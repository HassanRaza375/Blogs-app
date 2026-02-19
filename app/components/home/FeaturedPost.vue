<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Title -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Featured Article
        </h2>
        <p class="mt-4 text-gray-600">
          A hand-picked guide you shouldn’t miss.
        </p>
      </div>

      <!-- Featured Card -->
      <div
        class="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
      >
        <!-- Image -->
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Featured Post"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div class="p-8">
          <!-- Category -->
          <span
            class="inline-block mb-4 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
          >
            Nuxt 4
          </span>

          <!-- Title -->
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Building a Production-Ready Blog with Nuxt 4 & Tailwind CSS
          </h3>

          <!-- Excerpt -->
          <p class="mt-4 text-gray-600 leading-relaxed">
            Learn how to structure, design, and optimize your blog for
            performance and scalability using modern frontend tools.
          </p>

          <!-- Meta -->
          <div class="mt-6 text-sm text-gray-500">
            Jan 15, 2026 • 8 min read
          </div>

          <!-- CTA -->
          <NuxtLink
            to="/blog/nuxt-blog-guide"
            class="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Read Full Article →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
