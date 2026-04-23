export type Category = {
  id: string
  name: string
  slug: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category_id: string
  category?: Category
  sizes: string[]
  colors: string[]
  stock: number
  is_active: boolean
  created_at: string
}

export type CartItem = {
  product: Product
  size: string
  color: string
  quantity: number
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export type Order = {
  id: string
  user_id: string
  total: number
  status: OrderStatus
  shipping_address: ShippingAddress
  created_at: string
  items?: OrderItem[]
}

export type OrderItem = {
  id: string
  order_id: string
  product_id: string
  product?: Product
  quantity: number
  size: string
  color: string
  price: number
}

export type ShippingAddress = {
  full_name: string
  address: string
  city: string
  postal_code: string
  country: string
  phone: string
}
