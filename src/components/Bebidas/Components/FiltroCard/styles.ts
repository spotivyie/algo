import styled from 'styled-components'
import { colors } from '../../../../styles'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  margin-top: 10px;
  border: 1px solid ${colors.black};
  background-color: ${colors.white};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Label = styled.span`
  font-size: 14px;
`
