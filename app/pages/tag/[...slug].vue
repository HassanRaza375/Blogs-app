<template>
  <div>
    <h1>Tag Page</h1>
    <p>This is the Tag page for: {{ slug }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug || [];
</script>

<style>
</style>