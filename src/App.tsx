import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import { GlobalCSS } from './styles'

import Header from "./components/Header"
import Footer from './components/Footer'
import Cart from './components/Cart'
import Rotas from './routes'
import Category from './components/Category'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
        </div>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
