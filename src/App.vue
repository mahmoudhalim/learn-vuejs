<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

onMounted(() => {
  console.log('App mounted')
  productStore.fetchProducts()
})
onUnmounted(() => console.log('App unmounted'))
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
