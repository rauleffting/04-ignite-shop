import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  ProductsContainer,
  SuccessContainer,
} from '../styles/pages/success'

import shirt from '../assets/shirt.png'
import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

interface SuccessProps {
  costumerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  const { setCartItems } = useContext(CartContext)

  setCartItems(null)

  return (
    <>
      <Head>
        <title>Purchase made | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageContainer>
          {products.map((product, index) => (
            <div key={index}>
              <Image src={product.imageUrl} width={140} height={140} alt="" />
            </div>
          ))}
        </ImageContainer>

        <h1>Purchase made!</h1>

        <p>
          Woohoo! <strong>{costumerName}</strong>, your purchase of{' '}
          {products.length} {products.length > 0 ? 'shirts' : 'shirt'} is on
          your way!
        </p>

        <Link href="">Return to catalog</Link>
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
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
