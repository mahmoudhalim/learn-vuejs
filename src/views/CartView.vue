<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

onMounted(() => console.log('CartView mounted'))
onUnmounted(() => console.log('CartView unmounted'))
</script>

<template>
  <div class="min-h-screen bg-base-200 p-6 flex justify-center">
    <div class="w-full max-w-4xl">
      <h1 class="text-3xl font-bold mb-8">Your Cart</h1>

      <div v-if="cartStore.items.length === 0" class="text-center py-24">
        <p class="text-2xl font-semibold text-base-content/50">Your cart is empty.</p>
        <RouterLink to="/" class="btn btn-primary mt-6">Continue Shopping</RouterLink>
      </div>

      <template v-else>
        <div class="card bg-base-100 shadow-sm overflow-hidden">
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th class="text-center">Price</th>
                <th class="text-center">Qty</th>
                <th class="text-center">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartStore.items" :key="item.product.id">
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img :src="item.product.image" :alt="item.product.name" />
                      </div>
                    </div>
                    <div>
                      <RouterLink
                        :to="`/product/${item.product.id}`"
                        class="font-bold hover:text-primary"
                      >
                        {{ item.product.name }}
                      </RouterLink>
                      <div
                        v-if="item.product.discount"
                        class="text-xs text-base-content/50 line-through"
                      >
                        ${{ item.product.price.toFixed(2) }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <span class="text-primary font-semibold">
                    ${{
                      item.product.discount
                        ? (item.product.price * (1 - item.product.discount / 100)).toFixed(2)
                        : item.product.price.toFixed(2)
                    }}
                  </span>
                </td>
                <td class="text-center font-medium">{{ item.quantity }}</td>
                <td class="text-center font-bold">
                  ${{
                    (
                      (item.product.discount
                        ? item.product.price * (1 - item.product.discount / 100)
                        : item.product.price) * item.quantity
                    ).toFixed(2)
                  }}
                </td>
                <td class="text-right">
                  <button
                    class="btn btn-ghost btn-sm text-error"
                    @click="cartStore.removeFromCart(item.product.id)"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex flex-col items-end gap-4 mt-6">
          <div class="text-2xl font-bold">
            Total:
            <span class="text-primary">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex gap-3">
            <button class="btn btn-outline btn-error" @click="cartStore.clearCart()">
              Clear Cart
            </button>
            <button class="btn btn-primary btn-lg">Checkout</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
