import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const OnlineBar = styled.div`
  padding: 100px 0;

  @media (max-width: ${breakpoints.desktop}){
    max-width: 80%;
  }
`

export const TreeOn = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const House = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 30px;
  }
`

export const Circle = styled.div`
  border: 1px solid ${colors.green};
  background-color: ${colors.green};
  border-radius: 50%;
  padding: 10px;

`

export const Buy = styled.div`
  padding-left: 10px;

  h1{
    font-size: 24px;
  }

  p{
    padding-top: 6px;
  }
`
