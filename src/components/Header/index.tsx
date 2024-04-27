import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { alterarTermo } from '../../store/reducers/filtro'

import { open } from '../../store/reducers/cart'
import { UserCircle, MagnifyingGlass } from '@phosphor-icons/react'

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
    <S.HeaderBar className="container">
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
          <button>
            <MagnifyingGlass size={24} />
          </button>
        </S.Search>
          <S.Login onClick={goToLogin}>
            <UserCircle size={24}  />
            <p>
              Minha Conta
            </p>
          </S.Login>
        <S.Cart role="button" onClick={openCart}>
          <img src={cart} alt="carrinho"/>
        </S.Cart>
      </S.HeaderRow>
    </S.HeaderBar>
  )
}

export default Header
