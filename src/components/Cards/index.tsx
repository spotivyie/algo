import * as S from './styles'

import { QuantityInput } from '../Form/QuantityInput'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Menu from '../../types'
import { parseToBrl } from '../../utils'
import { useCart } from '../../store/hooks/usecart'

type Props = {
  id: string
  name: string
  image: string
  price: number
  bebidas: Menu
}

const Cards = ({ image, name, price, bebidas }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    setIsItemAdded(true)
    setQuantity(1)
    dispatch(add({
      id: bebidas.id,
      name: bebidas.name,
      image: bebidas.image,
      price: bebidas.price,
      quantity
    }))
    dispatch(open())
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  const { addDrinkToCart } = useCart();

  function handleAddToCart() {
    const drinkToAdd = {
      ...bebidas,
      quantity,
    };
    addDrinkToCart(drinkToAdd);
  }

  return (
    <S.Card>
      <img src={image} alt={name} />
      <S.Tag>{name}</S.Tag>
      <S.Descricao>{parseToBrl(price)}</S.Descricao>
      <S.HeaderBar>
        <QuantityInput
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        <S.Button onClick={addToCart} >
          <h1 onClick={handleAddToCart}>Comprar</h1>
        </S.Button>
      </S.HeaderBar>
    </S.Card>
  )
}

export default Cards
