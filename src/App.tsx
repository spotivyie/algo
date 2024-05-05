import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import { GlobalCSS } from './styles'

import Cart from './components/Cart'
import Rotas from './routes'
import { CartContextProvider } from './store/context/CartProvider'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
        </div>
        <CartContextProvider>
          <Rotas />
        </CartContextProvider>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
