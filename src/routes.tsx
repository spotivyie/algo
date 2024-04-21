import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Checkout from './pages/Checkout'
// import Categories from './pages/Categories'
// import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} /> */}
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
