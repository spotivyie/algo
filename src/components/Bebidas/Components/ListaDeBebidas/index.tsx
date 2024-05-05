import { Container } from "./styles"
import Cards from "../../../Cards"
import Menu from "../../../../types"

export type Props = {
  menu: Menu[]
}

export const ListaDeBebidas = ({ menu }: Props) => {

  return(
  <Container>
      {menu.map((bebida) => (
        <Cards
          key={bebida.id}
          id={bebida.id}
          name={bebida.name}
          price={bebida.price}
          image={bebida.image}
          bebidas={bebida}
          prioridade={bebida.prioridade}
        />
      ))}
  </Container>
)
}

export default ListaDeBebidas
