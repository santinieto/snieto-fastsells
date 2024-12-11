import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {getCartCount} = useContext(CartContext)
    
    return (
        <div className="cartWidgetContainer">
            <BsCart4 fontSize={'2rem'} color="rgb(137, 167, 87)"/>
            <Badge bg="success" className="cartWidgetCount">{getCartCount()}</Badge>
        </div>
    )
}

export default CartWidget