<template>
  <div>
    <h1>Category Page</h1>
    <p>This is the category page for: {{ slug }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug || [];
</script>

<style>
</style>