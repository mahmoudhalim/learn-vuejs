<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import productsData from '@/product.json'
import type { Product } from '@/types'

const products = ref<Product[]>(productsData as Product[])

function handleBuy(product: Product) {
  const found = products.value.find((p) => p.id === product.id)
  if (!found || found.stock <= 0) return
  found.stock--
  console.log('Purchased:', product.name, '— stock left:', found.stock)
}

onMounted(() => console.log('App mounted'))
onUnmounted(() => console.log('App unmounted'))
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1 ">
      <RouterView v-slot="{ Component }">
        <component :is="Component" :products="products" @buy="handleBuy" />
      </RouterView>
    </main>
    <Footer />
  </div>
</template>
