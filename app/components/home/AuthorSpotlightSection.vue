<script setup lang="ts">
interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  twitter?: string;
  github?: string;
  website?: string;
}

const props = defineProps<{
  author: Author;
}>();
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6 lg:px-8">
      <div
        class="max-w-5xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12"
      >
        <!-- Avatar -->
        <div class="flex justify-center md:justify-start gap-2">
          <div
            class="w-36 h-36 rounded-full overflow-hidden shadow-sm bg-gray-100 flex items-center justify-center"
            v-if="author.avatar"
            v-html="author.avatar"
          ></div>

          <!-- Content -->
          <div class="md:col-span-2 text-center md:text-left">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
              Meet {{ author.name }}
            </h2>

            <p class="mt-2 text-sm uppercase tracking-wide text-gray-500">
              {{ author.role }}
            </p>

            <p class="mt-6 text-lg text-gray-600 leading-relaxed">
              {{ author.bio }}
            </p>

            <!-- Social Links -->
            <div
              class="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <NuxtLink
                v-if="author.twitter"
                :to="author.twitter"
                target="_blank"
                class="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Twitter
              </NuxtLink>

              <NuxtLink
                v-if="author.github"
                :to="author.github"
                target="_blank"
                class="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                GitHub
              </NuxtLink>

              <NuxtLink
                v-if="author.website"
                :to="author.website"
                target="_blank"
                class="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Website
              </NuxtLink>
            </div>

            <!-- CTA -->
            <div class="mt-8">
              <NuxtLink
                to="/about"
                class="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Learn more
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
