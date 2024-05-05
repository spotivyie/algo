import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  @media (max-width: ${breakpoints.desktop}){
    padding: 0 50px;
  }
`
