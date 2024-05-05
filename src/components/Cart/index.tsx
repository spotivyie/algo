import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

import { parseToBrl } from '../../utils'
import { QuantityInput } from '../Form/QuantityInput'
import Menu from '../../types'
import { useCart } from '../../store/hooks/usecart'
import { useState } from 'react'
import { Trash } from 'phosphor-react'

interface DrinkProps {
  drink: Menu
}

const Cart = ({drink}: DrinkProps) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  const { addItem } = useCart();

  function handleAddToCart() {
    const drinkToAdd = {
      ...drink,
      quantity,
    };
    addItem(drinkToAdd);
  }

  const drinkInCart = items.map((item) => {
    const drinkInfo = items.find((drinks) => drinks.id === item.id)

    if (!drinkInfo) {
      throw new Error('Invalid drink.')
    }

    return {
      ...drinkInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = drinkInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const { changeCartItemQuantity } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(drink.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(drink.id, "decrease");
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <S.Input>
                  <div>
                    <h3>{item.name}</h3>
                    <span>{parseToBrl(item.price)}</span>
                  </div>
                  <S.QuantityItem>
                    <QuantityInput
                      quantity={item.quantity}
                      incrementQuantity={handleIncrease}
                      decrementQuantity={handleDecrease}
                    />
                  </S.QuantityItem>
                  </S.Input>
                  <S.CloseButton onClick={() => removeItem(item.id)} type="button">
                    <Trash size={18}/>
                  </S.CloseButton>
                </S.CartItem>
              ))}
            </ul>
            <S.CartShop>
              <S.Quantity>{items.length} bebida(s) no carrinho</S.Quantity>
              <S.Prices>
                Total de <span></span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsPrice)}
              </S.Prices>
              <S.CartButton
                onClick={goToCheckout}
                title="Clique aqui para continuar com a compra"
                type="button"
                >
                <div onClick={handleAddToCart}>
                  Continuar compra
                </div>
              </S.CartButton>
            </S.CartShop>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
