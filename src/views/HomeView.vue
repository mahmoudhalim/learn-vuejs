<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import CarouselBanner from '@/components/CarouselBanner.vue'
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types'

defineProps<{ products: Product[] }>()

onMounted(() => console.log('HomeView mounted'))
onUnmounted(() => console.log('HomeView unmounted'))
</script>

<template>
  <div>
    <CarouselBanner :products="products" />
    <section class="p-8 bg-base-200 min-h-screen">
      <h2 class="text-2xl font-bold mb-6">Our Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>
