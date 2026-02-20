export interface Product {
  id: number
  name: string
  description?: string
  image: string
  badge?: string
  price: number
  discount?: number
  tags?: string[]
  stock: number
}
