import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header, Cart } from '../styles/pages/app'

import Image from 'next/image'
import { Handbag } from '@phosphor-icons/react'

import * as Dialog from '@radix-ui/react-dialog'
import CartModal from '../components/cartModal'
import { useRouter } from 'next/router'

/* the best is to put globalStyles outside the function App because if it's inside, it will be rendered every time the function App is rendered */
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const items: number = 1

  const router = useRouter()
  const currentPage = router.pathname

  return (
    <Container>
      <Header
        style={currentPage === '/success' ? { justifyContent: 'center' } : null}
      >
        <Image src={logoImg.src} alt="" width={130} height={52} />
        {!(currentPage === '/success') && (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Cart>
                <Handbag size={24} />
                {items > 0 && <strong>{items}</strong>}
              </Cart>
            </Dialog.Trigger>
            <CartModal />
          </Dialog.Root>
        )}
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
