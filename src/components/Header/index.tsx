import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { UserCircle } from '@phosphor-icons/react'

import * as S from './styles'
import cart from '../../assets/carrinho.png'

const Header = () => {
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
          <Link to="/" className="link">
            <h1>LOGO</h1>
          </Link>
        <S.Search>
          <S.Login onClick={goToLogin}>
            <UserCircle size={24}  />
            <p>
              Minha Conta
            </p>
          </S.Login>
        <S.Cart role="button" onClick={openCart}>
          <img src={cart} alt="carrinho"/>
        </S.Cart>
        </S.Search>
      </S.HeaderRow>
    </S.HeaderBar>
  )
}

export default Header
