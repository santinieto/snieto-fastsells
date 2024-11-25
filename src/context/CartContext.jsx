import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (item, quantity) => {
        // console.log(item, quantity, "Recibido por parametro")
        if(isInCart(item.id)) {
            setCart(
                cart.map((prod) => {
                    if(prod.id === item.id) {
                        return {...prod, cantidad: prod.cantidad + quantity}
                    } else {
                        return prod
                    }
                })
            )
        } else {
            setCart([...cart, {...item, cantidad: quantity}])
        }
    }
    
    const removeFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }
    
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    
    const getCartCount = () => {
        return cart.reduce((total, prod) => total + prod.cantidad, 0);
    };
    
    const getCartTotal = () => {
        return cart.reduce((total, prod) => total + prod.cantidad * prod.price, 0);
    }
    
    const cartClear = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, getCartCount, getCartTotal, cartClear}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)