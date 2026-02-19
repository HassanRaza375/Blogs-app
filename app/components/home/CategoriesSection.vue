<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Browse by Category
        </h2>
        <p class="mt-4 text-gray-600">
          Explore topics that interest you the most.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="category in categories"
          :key="category.name"
          :to="`/category/${category.slug}`"
          class="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
        >
          <!-- Icon -->
          <div class="text-3xl mb-4">
            {{ category.icon }}
          </div>

          <!-- Name -->
          <h3
            class="text-lg font-semibold text-gray-900 group-hover:text-black transition"
          >
            {{ category.name }}
          </h3>

          <!-- Post Count -->
          <p class="mt-2 text-sm text-gray-500">
            {{ category.count }} Articles
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: "Nuxt",
    slug: "nuxt",
    icon: "⚡",
    count: 12,
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind",
    icon: "🎨",
    count: 8,
  },
  {
    name: "JavaScript",
    slug: "javascript",
    icon: "🟨",
    count: 15,
  },
  {
    name: "Performance",
    slug: "performance",
    icon: "🚀",
    count: 6,
  },
];
</script>
