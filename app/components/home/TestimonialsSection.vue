<script setup lang="ts">
interface Testimonial {
  name: string;
  company: string;
  quote: string;
  avatar: string;
}

const props = defineProps<{
  testimonials: Testimonial[];
}>();
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto mb-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900">What People Are Saying</h2>
        <p class="mt-4 text-lg text-gray-600">
          Don’t just take our word for it. See what others have to say about our
          content.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-white p-6 rounded-xl shadow-lg"
        >
          <div class="flex items-center mb-4">
            <img
              :src="testimonial.avatar"
              alt="Avatar"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="text-lg font-semibold text-gray-800">
                {{ testimonial.name }}
              </h4>
              <p class="text-sm text-gray-500">{{ testimonial.company }}</p>
            </div>
          </div>
          <p class="text-gray-700 text-base">{{ testimonial.quote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
