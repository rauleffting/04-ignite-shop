import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '../styles/pages/home'

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'
import shirt4 from '../assets/shirts/4.png'

import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'
import { stripe } from '../lib/stripe'
import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>$ {product.price.toFixed(2)}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

/* 
With the getServerSideProps the page will be displayed only after all data was fetched and it's available 
*/

export const getServerSideProps: GetServerSideProps = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 8000))
  // console.log('rodou')

  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}

/*
Also, we can put sensitive code inside the getServerSideProps, 
because the user will not have access to data inside it
*/
