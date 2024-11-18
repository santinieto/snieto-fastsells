import React from "react";
import ItemCountComponent from './../components/ItemCountComponent'

const ItemDetail = ({product}) => {
    const onAdd = (cantidad) => {
        alert(`Se han agregado ${cantidad} productos al carrito!`)
    }

    return (
        <div key={product.id} className="card mb-3 itemDetailCard">
            <img src={product.image} className="card-img-top itemDetailImage" alt="Imagen del producto" />
            <div className="card-body itemDetailBody">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text itemDetailPrice">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><small className="text-muted">In stock: {product.stock}</small></p>
                <ItemCountComponent stock={product.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail