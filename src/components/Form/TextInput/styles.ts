import styled from 'styled-components'
import { colors } from '../../../styles'


export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;

  input {
    color: ${colors.black};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${colors.black};
    }
  }

  span {
    color: ${colors.black};
    padding-right: 12px;
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`
