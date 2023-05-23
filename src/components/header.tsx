import { HeaderContainer, Cart } from '../styles/components/header'

import logoImg from '../assets/logo.svg'

import Image from 'next/image'
import { Handbag } from '@phosphor-icons/react'

import * as Dialog from '@radix-ui/react-dialog'
import CartModal from '../components/cartModal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

export function Header() {
  const router = useRouter()
  const currentPage = router.pathname

  const { cartItems } = useContext(CartContext)

  const numberOfItems = cartItems?.length

  return (
    <HeaderContainer
      style={currentPage === '/success' ? { justifyContent: 'center' } : null}
    >
      <Link href={`/`}>
        <Image src={logoImg.src} alt="" width={130} height={52} />
      </Link>
      {!(currentPage === '/success') && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Cart>
              <Handbag size={24} />
              {<strong>{numberOfItems}</strong>}
            </Cart>
          </Dialog.Trigger>
          <CartModal />
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}
