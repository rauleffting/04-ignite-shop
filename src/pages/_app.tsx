import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import Image from 'next/image'

/* the best is to put globalStyles outside the function App because if it's inside, it will be rendered every time the function App is rendered */
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width={130} height={52} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
