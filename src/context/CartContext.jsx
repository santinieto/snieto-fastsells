import { createContext, useContext, useState, useEffect} from 'react';

export const CartContext = createContext();
const prodFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(prodFromLocalStorage)
    
    //LocalStorage - Carrito persistente
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    
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

    // DESCONTAR STOCK LOCAL
    const itemQuantity = (id) => {
        const itemInCart = cart.find((prod)=> prod.id === id)
        if(itemInCart){
            //devuelve la cantidad de ese item en el carrito
            return itemInCart.cantidad
        }else{
            //No existe en el carrito, devuelve 0
            return 0
        }
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, getCartCount, getCartTotal, cartClear, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)