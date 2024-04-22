import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { alterarTermo } from '../../store/reducers/filtro'

import { open } from '../../store/reducers/cart'

import * as S from './styles'
import cart from '../../assets/carrinho.png'

const Header = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const openCart = () => {
    dispatch(open())
  }

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
        <S.Search>
          <S.Campo
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
        </S.Search>
          <p onClick={goToLogin}>Entrar</p>
        <S.Cart role="button" onClick={openCart}>
          <img src={cart} alt="carrinho"/>
        </S.Cart>
      </S.HeaderRow>
    </S.HeaderBar>
  )
}

export default Header
