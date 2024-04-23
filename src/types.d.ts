class Menu {
  id: number
  name: string
  image: string
  price: number
  quantity: number

  constructor(
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number
  ){
    this.id = id
    this.name = name
    this.image = image
    this.price = price
    this.quantity = quantity
  }
}

export default Menu

