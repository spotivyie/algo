import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Card = styled.div`
  background-color: ${colors.basecard};
  padding: 20px 0;
`

export const Checkout = styled.div`
  margin: 60px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1{
    font-size: 18px;
    padding-left: 20px;
    padding-bottom: 10px;
  }

  p{
    color: ${colors.black};
  }
`

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    color: ${colors.black};
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.lightGray};
    border: 1px solid ${colors.basecard};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`

export const Button = styled.div`
  background-color: ${colors.basecard};
  padding: 40px 24px 20px;
`
