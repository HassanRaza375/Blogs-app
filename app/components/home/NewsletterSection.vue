<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div
        class="bg-gray-50 border border-gray-200 rounded-3xl p-10 md:p-16 text-center"
      >
        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Join 1,000+ Developers
        </h2>

        <!-- Description -->
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get practical tutorials, insights, and exclusive content delivered
          straight to your inbox. No spam. Unsubscribe anytime.
        </p>

        <!-- Form -->
        <form
          @submit.prevent="handleSubscribe"
          class="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
        >
          <input
            v-model="email"
            type="email"
            required
            placeholder="Enter your email address"
            class="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            class="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>

        <!-- Small Note -->
        <p class="mt-4 text-xs text-gray-500">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const handleSubscribe = () => {
  console.log("Subscribed:", email.value);

  // Later connect to API / Mailchimp / ConvertKit
  email.value = "";
  alert("Thanks for subscribing!");
};
</script>
