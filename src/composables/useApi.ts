import { ref } from 'vue'

export function useApi<T>(baseURL: string) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  async function getAll(): Promise<T | null> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(baseURL)
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      data.value = (await res.json()) as T
      return data.value
    } catch (e) {
      error.value = (e as Error).message
      return null
    } finally {
      loading.value = false
    }
  }

  async function getOne(id: number | string): Promise<T | null> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${baseURL}/${id}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      data.value = (await res.json()) as T
      return data.value
    } catch (e) {
      error.value = (e as Error).message
      return null
    } finally {
      loading.value = false
    }
  }

  async function update(id: number | string, body: T): Promise<T | null> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${baseURL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      data.value = (await res.json()) as T
      return data.value
    } catch (e) {
      error.value = (e as Error).message
      return null
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, getAll, getOne, update }
}
