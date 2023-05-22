import { useEffect, useState, createContext } from 'react'

import { CartContextType, CartContextProps, ProductProps } from '../types/types'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState([])

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function addToCart(product: ProductProps) {
    setCartItems((state) => [...state, product])
  }

  function removeFromCart() {}

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCreatingCheckoutSession,
        setIsCreatingCheckoutSession,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
