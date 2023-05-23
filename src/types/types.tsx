import { ReactNode } from 'react'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: number
  unformattedPrice: number
  description: string
  defaultPriceId: string
}

export interface GetProductProps {
  product: ProductProps
}

export interface CartContextType {
  cartItems: ProductProps[]
  setCartItems: (product: ProductProps[]) => void
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
  isCreatingCheckoutSession: boolean
  setIsCreatingCheckoutSession: (event: boolean) => void
}

export interface CartContextProps {
  children: ReactNode
}
