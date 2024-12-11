# FastSells

FastSells es un proyecto de E-commerce desarrollado con React. La aplicación permite a los usuarios explorar productos, agregar o quitar productos de un carrito de compras, y realizar un proceso de checkout para completar sus compras.

## Funcionalidades

- **Navegación:** Una barra de navegación siempre visible, implementada con React Router.
- **Lista de Productos:** Una lista de productos categorizados con la opción de filtrar por categoría.
- **Detalle de Productos:** Visualización de información detallada de un producto seleccionado.
- **Carrito de Compras:** Agregar, quitar y ver los productos seleccionados en un carrito de compras.
- **Proceso de Compra:** Realizar el checkout con un formulario personalizado.
- **Manejo de Errores:** Página de error para rutas no encontradas.

## Tecnologías Utilizadas

- **React:** Framework principal para la interfaz de usuario.
- **React Router:** Navegación entre páginas.
- **Bootstrap:** Para el diseño responsivo y estilización.
- **Context API:** Manejo del estado global del carrito de compras.

## Estructura de Archivos

```
/src
|-- App.jsx
|-- index.js
|-- App.css
|-- /components
    |-- NavbarComponent.jsx
    |-- ItemListComponent.jsx
    |-- ItemDetailContainer.jsx
    |-- CartView.jsx
    |-- Checkout.jsx
    |-- CheckoutUseForm.jsx
    |-- Error.jsx
|-- /context
    |-- CartContext.js
```

## Cómo Correr el Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/santinieto/snieto-fastsells
   cd FastSells
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación:
   ```bash
   npm start
   ```

La aplicación estará disponible en `http://localhost:<puerto>/`.

## Código de Ejemplo

### App.jsx

```javascript
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListComponent from './components/ItemListComponent';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
import CheckoutUseForm from './components/CheckoutUseForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <BrowserRouter>
        {/* La barra de navegación se muestra siempre */}
        <NavbarComponent params={{ brand: 'FastSells', count: count }} />

        <Routes>
          <Route path='/' element={<ItemListComponent inputs={{ greetings: 'Bienvenidos al E-commerce' }} />} />
          <Route path='/products' element={<ItemListComponent inputs={{ greetings: 'Bienvenidos al E-commerce' }} />} />
          <Route path='/products/:category' element={<ItemListComponent inputs={{ greetings: 'Filtrado por categoría: ' }} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
```

## Próximos Pasos

- **Autenticación de Usuarios:** Añadir registro e inicio de sesión.
- **Integración con Backend:** Conectar con una API para gestionar datos de productos y órdenes.
- **Mejoras de UI/UX:** Optimizar el diseño y mejorar la experiencia de usuario.

## Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT).
