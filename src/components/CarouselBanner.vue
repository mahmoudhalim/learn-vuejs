<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import type { Product } from '@/types'

const props = defineProps<{ products: Product[] }>()

const finalPrice = (p: Product) =>
  p.discount ? (p.price * (1 - p.discount / 100)).toFixed(2) : p.price.toFixed(2)

onMounted(() => console.log('CarouselBanner mounted'))
onUnmounted(() => console.log('CarouselBanner unmounted'))
</script>

<template>
  <div class="carousel w-full h-96 relative">
    <div
      v-for="(product, index) in products"
      :id="`slide${product.id}`"
      :key="product.id"
      class="carousel-item relative w-full"
    >
      <img :src="product.image" :alt="product.name" class="w-full h-96 object-cover" />
      <div
        class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4"
      >
        <span v-if="product.badge" class="badge badge-primary mb-3 text-sm font-semibold">
          {{ product.badge }}
        </span>
        <h2 class="text-4xl font-bold drop-shadow-lg">{{ product.name }}</h2>
        <p v-if="product.description" class="text-lg mt-2 drop-shadow max-w-lg">
          {{ product.description }}
        </p>
        <div class="flex items-baseline gap-3 mt-3">
          <span class="text-3xl font-bold">${{ finalPrice(product) }}</span>
          <span v-if="product.discount" class="text-lg line-through opacity-60">
            ${{ product.price.toFixed(2) }}
          </span>
          <span v-if="product.discount" class="badge badge-success text-white">
            {{ product.discount }}% off
          </span>
        </div>
        <RouterLink :to="`/product/${product.id}`" class="btn btn-primary mt-4">
          Shop Now
        </RouterLink>
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          :href="`#slide${products[index === 0 ? products.length - 1 : index - 1]!.id}`"
          class="btn btn-circle opacity-80"
          >❮</a
        >
        <a
          :href="`#slide${products[index === products.length - 1 ? 0 : index + 1]!.id}`"
          class="btn btn-circle opacity-80"
          >❯</a
        >
      </div>
    </div>
  </div>
</template>
