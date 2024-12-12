import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({prod}) => {
    const { removeFromCart } = useCart();
    
    return (
        <div className="cartItem">
            <button className="btn btn-danger" onClick={() => removeFromCart(prod.id)}>X</button>
            <span>{prod.name}</span>
            <span>{prod.cantidad}</span>
            <span>$ {prod.price}</span>
            <span>$ {prod.cantidad * prod.price}</span>
        </div>
    )
}

export default CartItem