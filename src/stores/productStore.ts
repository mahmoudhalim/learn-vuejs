import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import type { Product } from '@/types'

const API_BASE = 'http://localhost:3001'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const listApi = useApi<Product[]>(`${API_BASE}/products`)
  const itemApi = useApi<Product>(`${API_BASE}/products`)

  async function fetchProducts() {
    loading.value = true
    error.value = null
    const result = await listApi.getAll()
    if (result) products.value = result.map((p) => ({ ...p, id: Number(p.id) }))
    error.value = listApi.error.value
    loading.value = false
  }

  const getProductById = computed(() => (id: number) => products.value.find((p) => p.id === id))

  async function decreaseStock(productId: number) {
    const product = products.value.find((p) => p.id === productId)
    if (!product || product.stock <= 0) return
    product.stock -= 1
    await itemApi.update(productId, { ...product })
  }

  async function restoreStock(productId: number, quantity: number) {
    const product = products.value.find((p) => p.id === productId)
    if (!product) return
    product.stock += quantity
    await itemApi.update(productId, { ...product })
  }

  return { products, loading, error, fetchProducts, getProductById, decreaseStock, restoreStock }
})
