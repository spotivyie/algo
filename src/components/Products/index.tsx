import Carousel from "react-multi-carousel"
import Menu from "../../types"
import Cards from "../Cards"
import { Container } from "./styles"

export type Props = {
  menu: Menu[]
}

export const Product = ({ menu }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return(
  <Container>
    <Carousel responsive={responsive}>
      {menu.map((bebida) => (
        <Cards
          key={bebida.id}
          id={bebida.id}
          name={bebida.name}
          price={bebida.price}
          image={bebida.image}
          bebidas={bebida}
        />
      ))}
    </Carousel>
  </Container>
)
}

export default Product
