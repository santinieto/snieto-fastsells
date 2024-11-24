import React from "react";

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = React.useState(0)
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const increaseCount = () => {
        setCount(count + 1)
    }
    
    const onAddHandler = () => {
        if (count > stock) {
            alert("No hay stock suficiente")
        } else if (count != 0) {
            onAdd(count)
            setCount(0)
        }
    }
    
    return (
        <div>
            <div className="itemAmountSelect">
                <button className="btn btn-danger" onClick={decreaseCount}>-</button>
                <span className="btn">{count}</span>
                <button className="btn btn-primary" onClick={increaseCount}>+</button>
            </div>
            <div className="itemAmountAdd">
                <a href="#"className="btn btn-success" onClick={onAddHandler}>Agregar</a>
            </div>
        </div>
    )
}

export default ItemCount