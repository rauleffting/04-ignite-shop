import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

interface SuccessProps {
  costumerName: string
  productsImages: string[]
}

export default function Success({
  costumerName,
  productsImages,
}: SuccessProps) {
  const { setCartItems } = useContext(CartContext)

  setCartItems([])

  return (
    <>
      <Head>
        <title>Purchase made | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          {productsImages.map((productImage, index) => (
            <div key={index}>
              <Image src={productImage} width={140} height={140} alt="" />
            </div>
          ))}
        </ImageContainer>

        <h1>Purchase made!</h1>

        <p>
          Woohoo! <strong>{costumerName}</strong>, your purchase of{' '}
          {productsImages.length}{' '}
          {productsImages.length > 0 ? 'shirts' : 'shirt'} is on your way!
        </p>

        <Link href={`/`}>Return to catalog</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details.name
  console.log(session.line_items.data)
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      costumerName,
      productsImages,
    },
  }
}
