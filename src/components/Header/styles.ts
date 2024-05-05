import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  padding-top: 20px;
`

export const Cart = styled.a`
  cursor: pointer;

  p{
    padding-right: 20px;
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
    margin-left: 300px;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.phone}) {
    margin-left: 150px;
  }
}
`

export const Login = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 40px;

  p{
    margin: 6px;
  }

  @media (max-width: ${breakpoints.phone}) {
    p{
      display: none;
    }
  }
`

export const Search = styled.div`
`

export const Campo = styled.input`
  border: none;
  outline: 0;
  font-weight: bold;
  cursor: pointer;
  padding-right: 100px;
`
