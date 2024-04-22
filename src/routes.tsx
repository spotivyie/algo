import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './components/Login'
import Cervejas from './components/Bebidas/Cervejas'
import Gin from './components/Bebidas/Gin'
import Licor from './components/Bebidas/Licor'
import Vodka from './components/Bebidas/Vodka'
import Whisky from './components/Bebidas/Whisky'
// import Categories from './pages/Categories'
// import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} /> */}
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/login" element={<Login />} />

    <Route path="/cervejas" element={<Cervejas />} />
    <Route path="/gin" element={<Gin />} />
    <Route path="/licor" element={<Licor />} />
    <Route path="/vodka" element={<Vodka />} />
    <Route path="/whisky" element={<Whisky />} />
  </Routes>
)

export default Rotas
