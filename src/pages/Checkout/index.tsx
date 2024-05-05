import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/Header'
import Category from '../../components/Category'
import { QuantityInput } from '../../components/Form/QuantityInput'

import Menu from '../../types'

import * as S from './styles'
import { MapPin, Trash } from 'phosphor-react'

import { parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { useCart } from '../../store/hooks/usecart'
import { TextInput } from '../../components/Form/TextInput'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface DrinkProps {
  drink: Menu
}

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

const Checkout = ({drink}: DrinkProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

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

  const {
    cartItems,
    changeCartItemQuantity
  } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(drink.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(drink.id, "decrease")
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cartItems.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
  }

  return (
      <>
      <Header />
      <Category />
        <S.Container>
          <S.Checkout>
            <h1>Complete seu pedido</h1>
            <div className="container">
              <S.InfoContainer>
                <S.Card>
                  <>
                    <S.Row>
                    <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
                      <S.AddressContainer>
                        <S.Endereco>
                          <MapPin size={22} />
                          <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber o seu pedido</p>
                          </div>
                        </S.Endereco>

                        <S.AddressForm>
                          <TextInput
                            placeholder="CEP"
                            type="number"
                            containerProps={{ style: { gridArea: 'cep' } }}
                            error={errors.cep}
                            {...register('cep', { valueAsNumber: true })}
                          />

                          <TextInput
                            placeholder="Rua"
                            containerProps={{ style: { gridArea: 'street' } }}
                            error={errors.street}
                            {...register('street')}
                          />

                          <TextInput
                            placeholder="Número"
                            containerProps={{ style: { gridArea: 'number' } }}
                            error={errors.number}
                            {...register('number')}
                          />

                          <TextInput
                            placeholder="Complemento"
                            optional
                            containerProps={{ style: { gridArea: 'fullAddress' } }}
                            error={errors.fullAddress}
                            {...register('fullAddress')}
                          />

                          <TextInput
                            placeholder="Bairro"
                            containerProps={{ style: { gridArea: 'neighborhood' } }}
                            error={errors.neighborhood}
                            {...register('neighborhood')}
                          />

                          <TextInput
                            placeholder="Cidade"
                            containerProps={{ style: { gridArea: 'city' } }}
                            error={errors.city}
                            {...register('city')}
                          />

                          <TextInput
                            placeholder="UF"
                            maxLength={2}
                            containerProps={{ style: { gridArea: 'state' } }}
                            error={errors.state}
                            {...register('state')}
                          />
                        </S.AddressForm>
                        </S.AddressContainer>
                      </form>
                    </S.Row>
                  </>
                </S.Card>
            </S.InfoContainer>
          </div>
          </S.Checkout>

          <S.Checkout>
            <h1>Bebidas selecionadas</h1>
            <S.Select>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <span>{parseToBrl(item.price)}</span>
                    <S.Input>
                    <S.Quantity>
                      <QuantityInput
                          quantity={item.quantity}
                          incrementQuantity={handleIncrease}
                          decrementQuantity={handleDecrease}
                        />
                    </S.Quantity>
                    <S.CloseButton onClick={() => removeItem(item.id)} type="button">
                      <Trash size={18}/>
                      <span>Remover</span>
                    </S.CloseButton>
                    </S.Input>
                    </div>
                  </S.CartItem>
                ))}
              </ul>
              <S.Prices>
                Total de <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsPrice)}
                </span>
                </S.Prices>
              <S.Button>
                <S.ButtonLink to="/payment">
                  Continuar compra
                </S.ButtonLink>
              </S.Button>
            </S.Select>
          </S.Checkout>
        </S.Container>
    </>
  )
}

export default Checkout
