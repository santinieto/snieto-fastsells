import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";

const CartWidget = ({params}) => {
    return (
        <div className="cartWidgetContainer">
            <BsCart4 fontSize={'2rem'} color="rgb(137, 167, 87)"/>
            <Badge bg="success" className="cartWidgetCount">15</Badge>
        </div>
    )
}

export default CartWidget