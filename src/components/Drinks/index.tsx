import * as S from './styles'
import jack from '../../assets/jacke.jpg'

import Menu from "../../types"
import Products from "../Products"

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
  },
  {
    id: 6,
    name: "Jack Daniels",
    image: jack,
    price: 140.00
  },
  {
    id: 7,
    name: "Jack Daniels",
    image: jack,
    price: 140.00
  }
]

const Drinks = () => {
  return (
    <S.CategoryBar>
      <Products menu={bebidas} />
    </S.CategoryBar>
  )
}

export default Drinks
