<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types'

const props = defineProps<{ products: Product[] }>()
const emit = defineEmits<{ buy: [product: Product] }>()

const route = useRoute()

const product = computed(() => props.products.find((p) => p.id === Number(route.params.id)))

const related = computed(() => props.products.filter((p) => p.id !== Number(route.params.id)))

onMounted(() => console.log('ProductView mounted'))
onUnmounted(() => console.log('ProductView unmounted'))
</script>

<template>
  <div class="min-h-screen bg-base-200 p-6 flex justify-center">
    <div class="w-full max-w-6xl">
      <div v-if="product">
        <ProductDetails :product="product" @buy="emit('buy', $event)" />
        <section class="mt-8">
          <h2 class="text-xl font-bold mb-4">Related Products</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard v-for="p in related" :key="p.id" :product="p" />
          </div>
        </section>
      </div>
      <div v-else class="text-center py-24">
        <h2 class="text-2xl font-bold text-base-content/50">Product not found.</h2>
      </div>
    </div>
  </div>
</template>
