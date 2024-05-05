import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.basecard};
  padding: 40px 24px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.black};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
