import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.basecard};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.black};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.black};
  margin-bottom: 24px;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.black};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Input = styled.div`
  display: block;
  align-items: center;
`

export const CartShop = styled.div`
  display: block;
  position: absolute;
  bottom: 40px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.black};
  padding: 8px 0;
  position: relative;

  img {
    height: 100px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.black};
    font-weight: bold;
    font-size: 16px;
    padding-right: 24px;
  }

  span {
    display: block;
    color: ${colors.black};
    font-weight: bold;
    font-size: 14px;
    padding-top: 8px;
  }
`

export const CloseButton = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  position: absolute;
  top: 8px;
  right: 0;
`

export const QuantityItem = styled.div`
  padding-top: 20px;
`

export const CartButton  = styled.button`
  background-color: ${colors.black};
  border: 1px solid ${colors.black};
  color: ${colors.white};
  font-weight: bold;
  padding: 8px;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
`
