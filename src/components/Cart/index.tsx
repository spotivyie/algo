import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

import { getTotalPrice, parseToBrl } from '../../utils'
import { QuantityInput } from '../Form/QuantityInput'
import { decrementItemQuantityAction, incrementItemQuantityAction } from '../../store/reducers/actions'
import Menu from '../../types'
import { bebidas } from '../Drinks'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  const drinkInCart = items.map((item) => {
    const drinkInfo = bebidas.find((drinks) => drinks.id === item.id)

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

  function incrementItemQuantity(itemId: Menu['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Menu['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  function handleItemIncrement(itemId: number) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: number) {
    decrementItemQuantity(itemId)
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
                  <div>
                    <h3>{item.name}</h3>
                    <span>{parseToBrl(item.price)}</span>
                  <QuantityInput
                        quantity={item.quantity}
                        incrementQuantity={() => handleItemIncrement(item.id)}
                        decrementQuantity={() => handleItemDecrement(item.id)}
                      />
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} bebida(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de
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
                Continuar compra
            </S.CartButton>
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
