<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log('AboutView mounted'))
onUnmounted(() => console.log('AboutView unmounted'))
</script>

<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-8">
    <div class="max-w-2xl w-full">
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body gap-6">
          <h1 class="text-4xl font-bold text-center">About This Page</h1>

          <div class="divider"></div>

          <div class="flex flex-col gap-2">
            <p><span class="font-semibold">Name:</span> Halim</p>
            <p><span class="font-semibold">Course:</span> Vue.js</p>
            <p>
              <span class="font-semibold">Institute:</span> ITI — Information Technology Institute
            </p>
          </div>

          <div class="divider"></div>

          <div>
            <h2 class="text-xl font-semibold mb-2">About the Store</h2>
            <p class="text-base-content/70 leading-relaxed">
              ShopVue is a modern e-commerce store built with Vue.js, offering a curated selection
              of quality products. Browse through our catalog, explore detailed product pages, and
              enjoy a seamless shopping experience powered by a clean and responsive interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
