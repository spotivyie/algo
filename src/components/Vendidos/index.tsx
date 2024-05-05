import Products from "../Products"

import * as S from './styles'

import { useEffect, useState } from "react"
import Menu from "../../types"

const Vendidos = () => {
  const [bebidas, setBebidas] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://api-phi-one-85.vercel.app/vinho')
    .then((res) => res.json())
    .then((res) => setBebidas(res))
  }, [])

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
