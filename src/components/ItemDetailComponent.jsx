import React from "react";
import ItemCountComponent from './ItemCountComponent'
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {
    const onAdd = (cantidad) => {
        alert(`Se han agregado ${cantidad} productos al carrito!`)
    }

    return (
        <div key={product.id} className="card mb-3 itemDetailCard">
            <img src={product.img} className="card-img-top itemDetailImage" alt="Imagen del producto" />
            <div className="card-body itemDetailBody">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text itemDetailPrice">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><small className="text-muted">In stock: {product.stock}</small></p>
                <ItemCountComponent stock={product.stock} onAdd={onAdd} />
                <Link to={`/products`} className="btn btn-info">Volver</Link>
            </div>
        </div>
    )
}

export default ItemDetail