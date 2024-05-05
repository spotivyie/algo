import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 50px;

  h1 {
    color: ${colors.white};
  }
`

export const HeaderRow = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

> div {
  display: flex;
  align-items: center;
}
`

export const Login = styled.div`
  cursor: pointer;

  p{
    margin: 6px;
  }
`
