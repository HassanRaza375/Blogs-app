<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-12">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <p class="mt-3 text-gray-600">
            Fresh insights and tutorials from the blog.
          </p>
        </div>

        <NuxtLink
          to="/blog"
          class="hidden md:inline-block text-sm font-medium text-black hover:underline"
        >
          View All →
        </NuxtLink>
      </div>

      <!-- Posts Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in posts"
          :key="post.id"
          class="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
        >
          <!-- Image -->
          <div class="overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Category -->
            <span
              class="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
            >
              {{ post.category }}
            </span>

            <!-- Title -->
            <h3
              class="mt-4 text-lg font-bold text-gray-900 group-hover:text-black transition"
            >
              {{ post.title }}
            </h3>

            <!-- Excerpt -->
            <p class="mt-3 text-sm text-gray-600 leading-relaxed">
              {{ post.excerpt }}
            </p>

            <!-- Meta -->
            <div class="mt-5 text-xs text-gray-500">
              {{ post.date }} • {{ post.readTime }}
            </div>
          </div>
        </article>
      </div>

      <!-- Mobile View All -->
      <div class="mt-10 text-center md:hidden">
        <NuxtLink
          to="/blog"
          class="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          View All Articles
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "Mastering Nuxt 4 Structure",
    excerpt:
      "Learn the ideal folder structure and best practices for scaling your Nuxt applications.",
    category: "Nuxt",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 2,
    title: "Tailwind CSS Layout Secrets",
    excerpt:
      "Advanced layout techniques that make your UI look modern and clean.",
    category: "Tailwind",
    date: "Jan 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 3,
    title: "Optimizing Web Performance",
    excerpt:
      "Practical strategies to boost your site speed and SEO performance.",
    category: "Performance",
    date: "Jan 14, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
];
</script>
