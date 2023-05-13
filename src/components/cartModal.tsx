import * as Dialog from '@radix-ui/react-dialog'
import { Content } from '../styles/components/cartModal'

export default function CartModal() {
  return (
    <Dialog.Portal>
      <Content>
        <h2>Your cart</h2>
        <button>Click me!</button>
      </Content>
    </Dialog.Portal>
  )
}
