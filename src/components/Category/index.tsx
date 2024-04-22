import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const Category = () => {
  const navigate = useNavigate()

  const goToWhisky = () => {
    navigate('/whisky')
  }

  const goToVodka = () => {
    navigate('/vodka')
  }

  const goToGin = () => {
    navigate('/gin')
  }

  const goToLicor = () => {
    navigate('/licor')
  }

  const goToVinho = () => {
    navigate('/vinho')
  }

  const goToCerveja = () => {
    navigate('/cervejas')
  }

  return (
    <S.CategoryBar>
        <S.Drinks>
          <S.Bebidas onClick={goToWhisky}>
            Whisky
          </S.Bebidas>
          <S.Bebidas onClick={goToVodka}>
            Vodka
          </S.Bebidas>
          <S.Bebidas onClick={goToGin}>
            Gin
          </S.Bebidas>
          <S.Bebidas onClick={goToLicor}>
            Licor
          </S.Bebidas>
          <S.Bebidas onClick={goToVinho}>
            Vinho
          </S.Bebidas>
          <S.Bebidas onClick={goToCerveja}>
            Cervejas
          </S.Bebidas>
        </S.Drinks>
    </S.CategoryBar>
  )
}

export default Category
