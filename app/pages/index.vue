<template>
  <div class="bg-gray-100">
    <LazyHomeHeroSection />
    <LazyHomeFeaturedPost />
    <LazyHomeLatestPosts />
    <LazyHomeCategoriesSection />
    <LazyHomeNewsletterSection />
    <LazyHomePopularTopicsSection :topics="popularTopics" />
    <LazyHomeAuthorSpotlightSection :author="author" />
    <LazyHomeTestimonialsSection :testimonials="testimonials" />
  </div>
</template>

<script setup>
const toast = useNotification();

toast.success({
  title: "Success!",
  message: "Your action was completed successfully.",
});

const { data: avatarAuthor, error } = await useFetch(
  "https://jsonfakery.com/avatars/get-avatar"
);

const popularTopics = [
  { name: "Nuxt", slug: "nuxt", count: 24 },
  { name: "Vue", slug: "vue", count: 31 },
  { name: "Tailwind CSS", slug: "tailwind", count: 18 },
  { name: "TypeScript", slug: "typescript", count: 27 },
  { name: "Performance", slug: "performance", count: 12 },
  { name: "AI", slug: "ai", count: 14 },
  { name: "DevOps", slug: "devops", count: 9 },
];
const author = {
  name: "Alex Morgan",
  role: "Founder & Lead Engineer",
  bio: "I write about modern frontend architecture, performance optimization, and scalable UI systems. My goal is to help developers ship faster with confidence.",
  avatar: `${avatarAuthor.value || ""}`,
  twitter: "https://twitter.com/username",
  github: "https://github.com/username",
  website: "https://yourwebsite.com",
};
const testimonials = [
  {
    name: "Jane Doe",
    company: "Tech Innovators",
    quote:
      "This blog has been an incredible resource for keeping up with modern frontend trends!",
    avatar: "/images/testimonial1.jpg",
  },
  {
    name: "John Smith",
    company: "Dev Collective",
    quote:
      "I’ve implemented several strategies I learned from here in my projects. A must-follow blog!",
    avatar: "/images/testimonial2.jpg",
  },
  // Add more testimonials...
];
</script>

<style scoped></style>
