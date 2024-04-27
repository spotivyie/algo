import Category from "../../Category"
import Footer from "../../Footer"
import Header from "../../Header"
import BarraLateral from "../Components/BarraLateral"
import ListaDeBebidas from "../Components/ListaDeBebidas"

import * as S from './styles'

const Whisky = () => {

  return (
    <>
      <Header />
      <Category />
        <S.Whisky>
          <BarraLateral />
          <ListaDeBebidas />
        </S.Whisky>
      <Footer />
    </>
  )
}

export default Whisky
