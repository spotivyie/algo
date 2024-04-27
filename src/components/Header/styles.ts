import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  padding-top: 20px;

  h1 {
    line-height: 0;
  }
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

export const Search = styled.form`
  padding: 6px 20px 6px 20px;
  border-radius: 10px;
  border: 1px solid ${colors.lightGray};
  display: flex;
  cursor: pointer;

  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export const Campo = styled.input`
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding-right: 100px;

`
