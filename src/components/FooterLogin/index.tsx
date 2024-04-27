import { LockSimple } from '@phosphor-icons/react'

import * as S from './styles'

const FooterLogin = () => {

  return (
    <S.FooterLogin>
      <S.FooterLoginRow>
        <div>
        <LockSimple size={32} />
        </div>
        <div>
          <p>Seus dados</p>
          <p>100% seguros</p>
        </div>
      </S.FooterLoginRow>
    </S.FooterLogin>
  )
}

export default FooterLogin
