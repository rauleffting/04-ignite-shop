import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link' /** Link avoids refreshing using SPA */

import { useKeenSlider } from 'keen-slider/react'

import {
  HomeContainer,
  Icon,
  Product,
  SliderContainer,
} from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { Handbag, CaretRight } from '@phosphor-icons/react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  function slideToRight() {
    slider.current.next()
  }

  function slideToLeft() {
    slider.current.prev()
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer>
        <button className="button-back" onClick={slideToLeft}>
          <CaretRight size={48} />
        </button>
        <SliderContainer ref={sliderRef} className="keen-slider">
          {products.map((product) => {
            return (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                prefetch={false}
              >
                <Product className="keen-slider__slide">
                  <Image
                    src={product.imageUrl}
                    width={520}
                    height={480}
                    alt=""
                  />

                  <footer>
                    <div className="product-info-wrapper">
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <Icon>
                      <Handbag size={48} />
                    </Icon>
                  </footer>
                </Product>
              </Link>
            )
          })}
        </SliderContainer>
        <button className="button-forward" onClick={slideToRight}>
          <CaretRight size={48} />
        </button>
      </HomeContainer>
    </>
  )
}

/* 
  With the getServerSideProps the page will be displayed only after all data was fetched and it's available:
  export const getServerSideProps: GetServerSideProps = async () => {
  Also, getServerSideProps is executed on every request.
*/

/*
  With the getStaticProps, it uses cache to improve user experience, however, it works only on production mode. 
  On development mode, it works like getServerSideProps.
  It just can be used by all users. Dynamic and personal features must not be put in getStaticProps, 
  otherwise, every user will see the same.
*/

export const getStaticProps: GetStaticProps = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 8000))
  // console.log('rodou')

  const response = await stripe.products.list({
    expand: ['data.default_price'],
  }) // expand -> property that allows us to get related data

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: new Intl.NumberFormat('us', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}

/*
Also, we can put sensitive code inside the getServerSideProps, 
because the user will not have access to data inside it
*/
