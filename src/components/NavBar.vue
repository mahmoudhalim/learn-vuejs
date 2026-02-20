<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(() => console.log('NavBar mounted'))
onUnmounted(() => console.log('NavBar unmounted'))
</script>

<template>
  <nav class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost normal-case text-xl font-bold"> ShopVue </RouterLink>
    </div>
    <div>
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/" active-class="active">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/product/1" active-class="active">Products</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" active-class="active">About</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
