<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <h1 class="text-4xl font-bold text-primary">This is the Homepage</h1>
  </div>
</template>

<script setup>
const toast = useNotification();

toast.success({
  title: "Success!",
  message: "Your action was completed successfully.",
});
</script>

<style scoped></style>
