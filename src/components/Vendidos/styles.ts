import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const VendidosBar = styled.section`
  padding: 20px 100px 80px 100px;
  background-color: ${colors.black};
  color: ${colors.white};

  h2 {
    text-align: center;
    padding: 50px 0px;
  }

  div{
    border-radius: 6px;
  }

  @media (max-width: ${breakpoints.tablet}){
    padding: 20px 10px 80px 10px;
  }

  @media (max-width: ${breakpoints.phone}){
    padding: 20px 10px 80px 10px;
  }
`

export const Drinks = styled.div`
  max-width: 1224px;
  width: 100%;
  margin: 0 auto;
`
