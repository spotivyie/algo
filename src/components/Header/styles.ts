import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
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
export const Search = styled.div`
`

export const Campo = styled.input`
padding: 10px 200px 10px 10px;
  border-radius: 16px;
  border: 1px solid ${colors.lightGray};
  font-weight: bold;
`
