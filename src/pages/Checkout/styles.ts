import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 0 20px;
  margin: 0 auto;
  gap: 32px;
`

export const Card = styled.div`
  background-color: ${colors.basecard};
  padding: 20px 0;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  p{
    max-width: 592px;
  }
`

export const AddressContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Endereco = styled.div`
  display: flex;

  div{
  padding-left: 10px;
  padding-bottom: 10px;
  }
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

export const ButtonLink = styled(Link)`
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`

export const Select = styled.div`
  background-color: ${colors.basecard};
`

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  padding-top: 28px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 18px 10px;
  position: relative;

  img {
    height: 100px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
    margin-left: 14px;
  }

  h3 {
    color: ${colors.black};
    font-weight: bold;
    font-size: 16px;
    padding-right: 14px;
    padding-bottom: 8px;

  }

  span {
    display: block;
    color: ${colors.black};
    font-weight: bold;
    font-size: 14px;
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`

export const CloseButton = styled.button`
  padding: 6px 8px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  > span {
    }
`

export const Prices = styled.p`
  padding: 40px 24px 0px;
  font-weight: 400;
  font-size: 20px;

  span{
    font-weight: 700;
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
  'cep . .'
  'street street street'
  'number fullAddress fullAddress'
  'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`
