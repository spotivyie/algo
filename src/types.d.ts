import * as enums from '../../utils/enums/index'

class Menu {
  id: number
  name: string
  image: string
  price: number
  quantity: number
  prioridade?: enums.Prioridade

  constructor(
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number,
    prioridade: enums.Prioridade,
  ){
    this.id = id
    this.name = name
    this.image = image
    this.price = price
    this.quantity = quantity
    this.prioridade = prioridade
  }
}

export default Menu

