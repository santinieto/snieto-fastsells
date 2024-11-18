import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import ItemListComponent from './components/ItemListComponent'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      {/* La barra de navegacion se muestra siempre*/}
      <NavbarComponent params={{ brand: "FastSells" }} />
      
      <Routes>
        <Route path='/' element={<ItemListComponent inputs={{ greetings: "Bienvenidos al E-commerce" }} />} />
        <Route path='/products' element={<ItemListComponent inputs={{ greetings: "Bienvenidos al E-commerce" }} />} />
        <Route path='/products/:category' element={<ItemListComponent inputs={{ greetings: "Filtado por categoria: " }} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App