import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import {
  Card,
  CheckoutButton,
  CloseButton,
  Content,
} from '../styles/components/cartModal'
import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

import { ProductProps } from '../types/types'
import axios from 'axios'

export default function CartModal() {
  const {
    cartItems,
    isCreatingCheckoutSession,
    setIsCreatingCheckoutSession,
    removeFromCart,
  } = useContext(CartContext)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conect to Datalog/Sentry to watch
      setIsCreatingCheckoutSession(false)
      alert('Error while redirecting to the checkout page.')
    }
  }

  function handleRemoveItem(productToDelete: ProductProps) {
    removeFromCart(productToDelete)
  }

  const totalValue = new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD',
  }).format(
    cartItems.reduce((total, product) => {
      return total + product.unformattedPrice
    }, 0),
  )

  return (
    <Dialog.Portal>
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <h2>Your cart</h2>
        <div className="wrapper">
          <div className="card-wrapper">
            {cartItems.map((product) => (
              <Card key={product.id}>
                <div className="image-background">
                  <Image
                    src={product.imageUrl}
                    width={95}
                    height={95}
                    alt="shirt image"
                  />
                </div>
                <div className="shirt-wrapper">
                  <p>{product.name}</p>
                  <strong>{product.price}</strong>
                  <button onClick={() => handleRemoveItem(product)}>
                    Remove
                  </button>
                </div>
              </Card>
            ))}
            <footer>
              <div className="quantity-value-wrapper">
                <span>Quantity</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="quantity-value-wrapper">
                <strong>Total value:</strong>
                <h4>{totalValue}</h4>
              </div>
              <CheckoutButton
                disabled={isCreatingCheckoutSession}
                onClick={handleCheckout}
              >
                <span>Checkout</span>
              </CheckoutButton>
            </footer>
          </div>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
