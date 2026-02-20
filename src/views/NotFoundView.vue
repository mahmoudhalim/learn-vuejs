<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log('NotFoundView mounted'))
onUnmounted(() => console.log('NotFoundView unmounted'))
</script>

<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-8">
    <div class="text-center flex flex-col items-center gap-6">
      <h1 class="text-9xl font-black text-primary">404</h1>
      <h2 class="text-3xl font-bold">Page Not Found</h2>
      <p class="text-base-content/60 text-lg max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <RouterLink to="/" class="btn btn-primary btn-lg">Back to Home</RouterLink>
    </div>
  </div>
</template>
