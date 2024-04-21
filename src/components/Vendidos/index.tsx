import Menu from "../../types"
import Products from "../Products"

import * as S from './styles'

import jack from '../../assets/jacke.jpg'

const bebidas: Menu[] = [
  {
    id: 1,
    name: "Jack Daniels",
    image: jack,
    price: 140.00
  },
  {
    id: 2,
    name: "Jack Daniels",
    image: jack,
    price: 140.00
  },
  {
    id: 3,
    name: "Jack Daniels",
    image: jack,
    price: 140.00
  },
  {
    id: 4,
    name: "Jack Daniels",
    image: jack,
    price: 140.00
  },
  {
    id: 5,
    name: "Jack Daniels",
    image: jack,
    price: 140.00
  }
]

const Vendidos = () => {
  return (
    <S.VendidosBar>
        <S.Drinks>
          <h2>Mais Vendidos</h2>
            <div>
              <Products menu={bebidas} />
            </div>
        </S.Drinks>
    </S.VendidosBar>
  )
}

export default Vendidos
