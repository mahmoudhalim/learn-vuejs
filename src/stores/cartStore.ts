import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { useProductStore } from '@/stores/productStore'
import type { CartItem, Product } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage<CartItem[]>('cart', [])

  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => {
      const price = item.product.discount
        ? item.product.price * (1 - item.product.discount / 100)
        : item.product.price
      return sum + price * item.quantity
    }, 0),
  )

  function addToCart(product: Product) {
    const productStore = useProductStore()
    const existing = items.value.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ product: { ...product }, quantity: 1 })
    }
    productStore.decreaseStock(product.id)
  }

  function removeFromCart(productId: number) {
    const productStore = useProductStore()
    const item = items.value.find((i) => i.product.id === productId)
    if (item) productStore.restoreStock(productId, item.quantity)
    items.value = items.value.filter((i) => i.product.id !== productId)
  }

  function clearCart() {
    const productStore = useProductStore()
    items.value.forEach((item) => productStore.restoreStock(item.product.id, item.quantity))
    items.value = []
  }

  return { items, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})
