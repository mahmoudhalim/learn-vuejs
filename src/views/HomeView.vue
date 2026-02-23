<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import CarouselBanner from '@/components/CarouselBanner.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

onMounted(() => console.log('HomeView mounted'))
onUnmounted(() => console.log('HomeView unmounted'))
</script>

<template>
  <div>
    <CarouselBanner />
    <section class="p-8 bg-base-200 min-h-screen">
      <div v-if="productStore.loading" class="flex justify-center py-24">
        <span class="loading loading-spinner loading-lg text-primary"></span>
      </div>
      <div v-else-if="productStore.error" class="text-center py-24 text-error">
        <p class="text-lg font-semibold">Failed to load products: {{ productStore.error }}</p>
      </div>
      <template v-else>
        <h2 class="text-2xl font-bold mb-6">Our Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in productStore.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </template>
    </section>
  </div>
</template>
