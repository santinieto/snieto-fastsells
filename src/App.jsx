import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import ItemListComponent from './components/ItemListComponent'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
import CheckoutUseForm from './components/CheckoutUseForm';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <CartProvider>
      <BrowserRouter>
        {/* La barra de navegacion se muestra siempre*/}
        <NavbarComponent params={{ brand: "FastSells", count:count }} />
        
        <Routes>
          <Route path='/' element={<ItemListComponent inputs={{ greetings: "Bienvenidos al E-commerce" }} />} />
          <Route path='/products' element={<ItemListComponent inputs={{ greetings: "Bienvenidos al E-commerce" }} />} />
          <Route path='/products/:category' element={<ItemListComponent inputs={{ greetings: "Filtado por categoria: " }} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='*' element={<Error/>} />
        </Routes>
        
      </BrowserRouter>
    </CartProvider>
  )
}

export default App