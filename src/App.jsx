import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import ItemListComponent from './components/ItemListComponent'
import ComponenteConChildren from './EjemploChildren/ComponenteConChildren';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  
  return (
    <>
      <NavbarComponent params={{ brand: "FastSells" }} />
      
      <ComponenteConChildren text="Obtener productos (Metodo Children)">
        <ItemListComponent params={{ greetings: "Bienvenidos al E-commerce" }} />
      </ComponenteConChildren>
      
      <ItemDetailContainer />
    </>
  )
}

export default App