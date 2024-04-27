import styled from 'styled-components'
import { colors } from '../../../../styles'
import * as enums from '../../../../utils/enums/index'

export const MainContainer = styled.main`
  padding: 0 40px;
  display: flex;

  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  li{
    padding: 20px;
    img{
      padding: 30px;
    }
  }
`

type TagProps = {
  prioridade?: enums.Prioridade
  parametro: 'prioridade'
}

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${colors.black};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
