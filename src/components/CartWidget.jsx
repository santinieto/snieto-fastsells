const CartWidget = ({params}) => {
    return (
        <div className="cartWidgetContainer">
            <img src="./cart.webp" alt="cart" className="cartWidgetImage" />
            <p className="cartWidgetCount">{params.counter}</p>
        </div>
    )
}

export default CartWidget