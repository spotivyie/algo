import { useEffect, useState } from "react"

import Category from "../../Category"
import Footer from "../../Footer"
import Header from "../../Header"

import * as S from './styles'
import ListaDeBebidas from "../Components/ListaDeBebidas"
import Menu from "../../../types"

const Vinho = () => {
  const [bebidas, setBebidas] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://api-phi-one-85.vercel.app/vinho')
    .then((res) => res.json())
    .then((res) => setBebidas(res))
  }, [])

  return (
    <>
      <Header />
      <Category />
        <S.Vinho>
          <ListaDeBebidas menu={bebidas} />
        </S.Vinho>
      <Footer />
    </>
  )
}

export default Vinho
