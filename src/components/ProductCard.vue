<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Product } from '@/types'

const props = defineProps<{ product: Product }>()

const router = useRouter()

const finalPrice = computed(() =>
  props.product.discount
    ? (props.product.price * (1 - props.product.discount / 100)).toFixed(2)
    : props.product.price.toFixed(2),
)

function goToProduct() {
  router.push(`/product/${props.product.id}`)
}

onMounted(() => console.log(`ProductCard mounted: ${props.product.name}`))
onUnmounted(() => console.log(`ProductCard unmounted: ${props.product.name}`))
</script>

<template>
  <div
    class="card bg-base-100 w-full shadow-sm cursor-pointer hover:ring-2 hover:ring-primary rounded-2xl transition-all"
    @click="goToProduct"
  >
    <figure class="overflow-hidden rounded-t-2xl">
      <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ product.name }}
        <span v-if="product.badge" class="badge badge-primary">{{ product.badge }}</span>
      </h2>
      <div class="flex items-baseline gap-2">
        <span class="text-lg font-bold text-primary">${{ finalPrice }}</span>
        <span v-if="product.discount" class="text-sm text-base-content/40 line-through"
          >${{ product.price.toFixed(2) }}</span
        >
        <span v-if="product.discount" class="badge badge-success text-white text-xs">
          {{ product.discount }}% off
        </span>
      </div>
    </div>
  </div>
</template>
