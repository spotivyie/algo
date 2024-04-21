import * as S from './styles'

import { QuantityInput } from '../Form/QuantityInput'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Menu from '../../types'
import { add, open } from '../../store/reducers/cart'

type Props = {
  id: number
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
    dispatch(add(bebidas))
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

  return (
    <S.Card>
      <img src={image} alt={name} />
      <S.Tag>{name}</S.Tag>
      <S.Descricao>{price}</S.Descricao>
      <S.HeaderBar>
        <QuantityInput
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        <S.Button onClick={addToCart}>
          <h1>Comprar</h1>
        </S.Button>
      </S.HeaderBar>
    </S.Card>
  )
}

export default Cards
