import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Menu from '../types'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-phi-one-85.vercel.app'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Menu, void>({
      query: () => '/bebidas'
    }),
    getOnSale: builder.query<Menu, void>({
      query: () => '/promocoes'
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  usePurchaseMutation
} = api

export default api
