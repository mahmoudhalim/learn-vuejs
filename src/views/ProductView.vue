<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '@/components/ProductDetails.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
const route = useRoute()

const product = computed(() => productStore.getProductById(Number(route.params.id)))

const related = computed(() =>
  productStore.products.filter((p) => p.id !== Number(route.params.id)),
)

onMounted(() => console.log('ProductView mounted'))
onUnmounted(() => console.log('ProductView unmounted'))
</script>

<template>
  <div class="min-h-screen bg-base-200 p-6 flex justify-center">
    <div class="w-full max-w-6xl">
      <div v-if="productStore.loading" class="flex justify-center py-24">
        <span class="loading loading-spinner loading-lg text-primary"></span>
      </div>
      <div v-else-if="product">
        <ProductDetails :product="product" />
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
