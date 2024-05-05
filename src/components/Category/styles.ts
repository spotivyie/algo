import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CategoryBar = styled.section`
  margin: 20px 0px;
  padding: 20px 100px 20px 100px;
  background-color: ${colors.black};
  color: ${colors.white};
`

export const Drinks = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.phone}) {
    justify-content: center;
  }
`

export const Bebidas = styled.div`
  color: ${colors.white};
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${breakpoints.phone}) {
    padding: 8px;
  }
`
