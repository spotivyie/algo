import { useEffect, useState } from "react"

import Category from "../../Category"
import Footer from "../../Footer"
import Header from "../../Header"

import * as S from './styles'
import ListaDeBebidas from "../Components/ListaDeBebidas"
import Menu from "../../../types"

const Gin = () => {
  const [bebidas, setBebidas] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://api-phi-one-85.vercel.app/gin')
    .then((res) => res.json())
    .then((res) => setBebidas(res))
  }, [])

  return (
    <>
      <Header />
      <Category />
        <S.Gin>
          <ListaDeBebidas menu={bebidas} />
        </S.Gin>
      <Footer />
    </>
  )
}

export default Gin
