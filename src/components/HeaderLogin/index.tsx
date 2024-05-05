import { Link, useNavigate } from 'react-router-dom'
import { UserCircle } from '@phosphor-icons/react'

import * as S from './styles'

const HeaderLogin = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <Link to="/" className="link">
          <h1>LOGO</h1>
        </Link>
        <S.Login onClick={goToLogin}>
          <UserCircle size={24}  />
          <p>
            Minha Conta
          </p>
        </S.Login>
      </S.HeaderRow>
    </S.HeaderBar>
  )
}

export default HeaderLogin
