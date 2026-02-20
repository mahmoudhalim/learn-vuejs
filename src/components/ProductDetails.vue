<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import type { Product } from '@/types'

const props = defineProps<{ product: Product }>()
const emit = defineEmits<{ buy: [product: Product] }>()

const finalPrice = computed(() =>
  props.product.discount
    ? (props.product.price * (1 - props.product.discount / 100)).toFixed(2)
    : props.product.price.toFixed(2),
)

onMounted(() => console.log(`ProductDetails mounted: ${props.product.name}`))
onUnmounted(() => console.log(`ProductDetails unmounted: ${props.product.name}`))
</script>

<template>
  <div class="card bg-base-100 shadow-lg">
    <div class="flex flex-col md:flex-row">
      <figure class="relative md:w-1/2">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-96 object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        />
        <span v-if="product.badge" class="absolute top-3 left-3 badge badge-primary font-semibold">
          {{ product.badge }}
        </span>
      </figure>
      <div class="card-body md:w-1/2 gap-4">
        <div v-if="product.tags?.length" class="flex flex-wrap gap-1">
          <span v-for="tag in product.tags" :key="tag" class="badge badge-outline badge-sm">{{
            tag
          }}</span>
        </div>

        <h1 class="text-3xl font-bold">{{ product.name }}</h1>

        <p v-if="product.description" class="text-base-content/60 text-base">
          {{ product.description }}
        </p>

        <div class="flex items-baseline gap-3 mt-2">
          <span class="text-4xl font-bold text-primary">${{ finalPrice }}</span>
          <span v-if="product.discount" class="text-lg text-base-content/40 line-through"
            >${{ product.price.toFixed(2) }}</span
          >
          <span v-if="product.discount" class="badge badge-success text-white">
            {{ product.discount }}% off
          </span>
        </div>

        <div class="flex items-center gap-2 mt-2">
          <span class="text-sm font-medium text-base-content/70">Stock:</span>
          <span
            class="badge"
            :class="
              product.stock === 0
                ? 'badge-error'
                : product.stock <= 3
                  ? 'badge-warning'
                  : 'badge-success'
            "
          >
            {{ product.stock === 0 ? 'Out of Stock' : `${product.stock} left` }}
          </span>
        </div>

        <div class="card-actions mt-4 gap-3">
          <button
            class="btn btn-primary btn-lg"
            :disabled="product.stock === 0"
            @click="emit('buy', product)"
          >
            {{ product.stock === 0 ? 'Out of Stock' : 'Buy Now' }}
          </button>
          <button class="btn btn-outline btn-lg">Wishlist</button>
        </div>
      </div>
    </div>
  </div>
</template>
