import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { CartContextProvider } from '../contexts/cartContext'
import { Header } from '../components/header'
import { Container } from '../styles/pages/app'

/* the best is to put globalStyles outside the function App because if it's inside, it will be rendered every time the function App is rendered */
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
