import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 50px;

  h1 {
    line-height: 0;
    color: ${colors.white};
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

> div {
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;
  }
}
`

export const Login = styled.div`
  cursor: pointer;

  p{
    margin: 6px;
  }
`
