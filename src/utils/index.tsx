import Menu from "../types"

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Menu[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.price) {
      return (accumulator += currentItem.price)
    }
    return 0
  }, 0)
}
