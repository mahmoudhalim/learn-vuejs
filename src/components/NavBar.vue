<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

onMounted(() => console.log('NavBar mounted'))
onUnmounted(() => console.log('NavBar unmounted'))
</script>

<template>
  <nav class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost normal-case text-xl font-bold"> ShopVue </RouterLink>
    </div>
    <div>
      <ul class="menu menu-horizontal px-1 items-center">
        <li>
          <RouterLink to="/" active-class="active">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" active-class="active">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" active-class="active" class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              v-if="cartStore.totalItems > 0"
              class="badge badge-xs badge-primary indicator-item"
              >{{ cartStore.totalItems }}</span
            >
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
