import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'
import Image from 'next/image'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Shirt X</h1>
        <span>$ 79.90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          voluptate placeat obcaecati animi rem pariatur, ut unde doloremque
          nesciunt corporis! Incidunt modi voluptates deleniti facilis excepturi
          mollitia sit esse pariatur!
        </p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  )
}
