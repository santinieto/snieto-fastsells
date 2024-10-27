import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // No hace falta tener la aplicacion en modo estricto por el momento
  // El modo estricto no deja pasar ciertas modificaciones a los compontentes
  // Ante el mas minimo error, el modo estricto no deja compilar
  <App />
  , // Esta coma tiene que estar
)
