import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterLogin = styled.header`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 60px;
`

export const FooterLoginRow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.white};
  border-radius: 6px;
  justify-content: center;
  max-width: 180px;
  margin: 0 auto;

  div{
    padding: 10px 6px 10px 0px;
  }
}
`
