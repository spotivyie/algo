import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.black};
  display: inline-block;
  position: relative;
  text-decoration: none;
  margin: 4px;

  img {
    width: 100%;
    display: block;
    padding: 0px 10px;
    object-fit: cover;
  }
`

export const Tag = styled.div`
  font-size: 16px;
  display: block;
  margin-top: 10px;
  text-align: center;
`


export const Descricao = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`

export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 16px;
  display: block;
  padding-left: 20px;
`

export const Button = styled.button`
  background-color: ${colors.green};
  border: 1px solid ${colors.green};
  color: ${colors.white};
  font-weight: bold;
  padding: 8px;
  margin-right: 20px;
  font-size: 8px;
  cursor: pointer;

  h1 {
    font-size: 14px;
  }
`
