import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { CartContext } from '../../contexts/cartContext'

import { GetProductProps } from '../../types/types'

export default function Product({ product }: GetProductProps) {
  const { cartItems, addToCart, isCreatingCheckoutSession } =
    useContext(CartContext)

  const [isTheProductInTheCart, setIsTheProductInTheCart] =
    useState<boolean>(false)

  function handleAddToCart() {
    addToCart(product)
  }

  useEffect(() => {
    setIsTheProductInTheCart(cartItems.includes(product))
  }, [cartItems])

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession || isTheProductInTheCart}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

/** We need the getStaticPaths to create static pages with dynamic data because we don't have params when building the project yet. */

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Np4ukRsDhlRIBU' } }],
    fallback:
      true /** We can use 'blocking' as well to display a blank page until everything is loaded */,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        price: new Intl.NumberFormat('us', {
          style: 'currency',
          currency: 'USD',
        }).format(price.unit_amount / 100),
        unformattedPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
