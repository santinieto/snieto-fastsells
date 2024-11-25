import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from './CartItem';

const CartList = () => {
    const { cart, getCartCount, getCartTotal, cartClear } = useCart();
    
    return (
        <div className="cartList">
            {cart.map((prod) => {
                    return <CartItem key={prod.id} prod={prod} />
                })
            }
            {console.log(cart)}
            <span className="cartSummary">Tu carrito tiene {getCartCount()} productos por un total de ${getCartTotal()}</span>
            <div className="cartButtons">
                <button className="btn btn-danger" onClick={cartClear}>Borrar carrito</button>
                <button className="btn btn-primary" >Confirmar compra</button>
            </div>
        </div>
    )
}

export default CartList