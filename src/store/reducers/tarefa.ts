import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/index'
import Menu from '../../types'
import jack from '../../assets/jacke.jpg'

type BebidaState = {
  itens: Menu[]
}

//mudar o nome da pau no sistema

const initialState: BebidaState = {
  itens: [
  {
    id: 1,
    name: "Jack Daniels",
    image: jack,
    price: 140.00,
    quantity: 0,
    prioridade: enums.Prioridade.WHISKY
  },
  {
    id: 2,
    name: "Jack Daniels",
    image: jack,
    price: 120.00,
    quantity: 0,
    prioridade: enums.Prioridade.VINHO
  },
  {
    id: 3,
    name: "Jack Daniels",
    image: jack,
    price: 130.00,
    quantity: 0,
    prioridade: enums.Prioridade.VINHO
  },
  {
    id: 4,
    name: "Jack Daniels",
    image: jack,
    price: 130.00,
    quantity: 0,
    prioridade: enums.Prioridade.CERVEJAS
  },
  {
    id: 5,
    name: "Jack Daniels",
    image: jack,
    price: 100.00,
    quantity: 0,
    prioridade: enums.Prioridade.CERVEJAS
  },
  {
    id: 6,
    name: "Jack Daniels",
    image: jack,
    price: 100.00,
    quantity: 0,
    prioridade: enums.Prioridade.GIN
  },
  {
    id: 7,
    name: "Jack Daniels",
    image: jack,
    price: 140.00,
    quantity: 0,
    prioridade: enums.Prioridade.LICOR
  }
  ]
}

const bebidasSlice = createSlice({
  name: 'bebidas',
  initialState,
  reducers: {
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (bebida) => bebida.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].prioridade = action.payload.id
          ? enums.Prioridade.WHISKY
          : enums.Prioridade.CERVEJAS
      }
    }
  }
})

export const { alteraStatus } = bebidasSlice.actions
export default bebidasSlice.reducer
