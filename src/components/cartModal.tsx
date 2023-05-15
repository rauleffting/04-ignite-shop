import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import {
  Card,
  CheckoutButton,
  CloseButton,
  Content,
} from '../styles/components/cartModal'

import shirt from '../assets/shirt.png'

export default function CartModal() {
  return (
    <Dialog.Portal>
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <h2>Your cart</h2>
        <div className="wrapper">
          <div className="card-wrapper">
            <Card>
              <Image src={shirt} width={95} height={95} alt="shirt image" />
              <div className="shirt-wrapper">
                <p>Shirt Y</p>
                <strong>$ 79.90</strong>
                <button>Remove</button>
              </div>
            </Card>
            <Card>
              <Image src={shirt} width={95} height={95} alt="shirt image" />
              <div className="shirt-wrapper">
                <p>Shirt Y</p>
                <strong>$ 79.90</strong>
                <button>Remove</button>
              </div>
            </Card>
            <Card>
              <Image src={shirt} width={95} height={95} alt="shirt image" />
              <div className="shirt-wrapper">
                <p>Shirt Y</p>
                <strong>$ 79.90</strong>
                <button>Remove</button>
              </div>
            </Card>
          </div>

          <footer>
            <div className="quantity-value-wrapper">
              <span>Quantity</span>
              <span>3 items</span>
            </div>
            <div className="quantity-value-wrapper">
              <strong>Total value:</strong>
              <h4>$ 270.00</h4>
            </div>
            <CheckoutButton>
              <span>Checkout</span>
            </CheckoutButton>
          </footer>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
