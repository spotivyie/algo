import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

import Cervejas from './components/Bebidas/Cervejas'
import Gin from './components/Bebidas/Gin'
import Licor from './components/Bebidas/Licor'
import Vodka from './components/Bebidas/Vodka'
import Whisky from './components/Bebidas/Whisky'
import Vinho from './components/Bebidas/Vinho'
import Payment from './pages/Payment'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/payment" element={<Payment />} />

    <Route path="/cervejas" element={<Cervejas />} />
    <Route path="/gin" element={<Gin />} />
    <Route path="/licor" element={<Licor />} />
    <Route path="/vodka" element={<Vodka />} />
    <Route path="/vinho" element={<Vinho />} />
    <Route path="/whisky" element={<Whisky />} />
  </Routes>
)

export default Rotas
