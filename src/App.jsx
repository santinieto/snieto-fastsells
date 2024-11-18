import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import ItemListComponent from './components/ItemListComponent'

function App() {
  return (
    <>
      <NavbarComponent params={{ brand: "FastSells" }} />
      <ItemListComponent params={{ greetings: "Bienvenidos al E-commerce" }} />
    </>
  )
}

export default App