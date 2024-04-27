import * as S from './styles'

import { QuantityInput } from '../Form/QuantityInput'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Menu from '../../types'
import * as enums from '../../utils/enums/index'

type Props = {
  id: number
  name: string
  image: string
  price: number
  bebidas: Menu
  prioridade: enums.Prioridade
}

const Cards = ({ image, name, price, bebidas, prioridade }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    setIsItemAdded(true)
    setQuantity(1)
    dispatch(add({
      id: bebidas.id, quantity,
      name: bebidas.name,
      image: bebidas.image,
      price: bebidas.price,
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
        <S.Button onClick={addToCart} >
          <h1>Comprar</h1>
        </S.Button>
        <p>{prioridade}</p>
      </S.HeaderBar>
    </S.Card>
  )
}

export default Cards
