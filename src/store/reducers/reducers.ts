import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'
import Menu from '../../types'
import { OrderInfo } from '../../pages/Checkout'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Menu[]
}

interface CartState {
  cart: Menu[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })

    default:
      return state
  }
}
