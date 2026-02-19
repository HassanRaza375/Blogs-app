<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">
        Welcome to MyBlog! We are passionate about sharing knowledge and
        insights on modern web development, frontend architecture, and
        performance optimization. Our mission is to help developers ship faster
        with confidence by providing high-quality content, tutorials, and best
        practices.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
      <div class="grid md:grid-cols-3 gap-10" v-if="teamMembers.length">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <img
            :src="member.avatar"
            :alt="member.name"
            class="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900">{{ member.name }}</h3>
          <p class="text-sm text-gray-500">{{ member.role }}</p>
          <p class="mt-2 text-gray-600">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Founder & Lead Engineer",
    bio: "I write about modern frontend architecture, performance optimization, and scalable UI systems. My goal is to help developers ship faster with confidence.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Davis",
    role: "Content Strategist",
    bio: "I focus on creating engaging and informative content that resonates with our audience. I have a background in technical writing and a passion for making complex topics accessible.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Senior Developer",
    bio: "With over a decade of experience in web development, I specialize in frontend technologies and performance optimization. I enjoy sharing my knowledge through tutorials and deep dives.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];
</script>

<style>
</style>