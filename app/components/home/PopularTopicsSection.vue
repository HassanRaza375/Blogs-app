<template>
  <section class="py-20 bg-gray-50/60">
    <div class="container mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-2xl mb-12">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Popular Topics
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Explore the technologies and ideas shaping modern development.
        </p>
      </div>

      <!-- Topics Grid -->
      <div class="flex flex-wrap gap-4">
        <NuxtLink
          v-for="topic in topics"
          :key="topic.slug"
          :to="`/tag/${topic.slug}`"
          class="group"
        >
          <div
            class="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors duration-200"
          >
            <span
              class="text-sm font-medium text-gray-800 group-hover:text-gray-900"
            >
              {{ topic.name }}
            </span>
            <span
              class="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full"
            >
              {{ topic.count }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  topics: {
    type: Array,
    required: true,
  },
});
</script>