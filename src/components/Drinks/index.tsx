import * as S from './styles'

import Menu from "../../types"
import Products from "../Products"
import { useEffect, useState } from 'react'

const Drinks = () => {
  const [bebidas, setBebidas] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://api-phi-one-85.vercel.app/whisky')
    .then((res) => res.json())
    .then((res) => setBebidas(res))
  }, [])

  return (
    <S.CategoryBar>
      <Products menu={bebidas} />
    </S.CategoryBar>
  )
}

export default Drinks
