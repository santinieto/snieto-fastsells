import React from "react";
import ItemCountComponent from './../components/ItemCountComponent'

const ItemDetail = ({product}) => {
    const onAdd = (cantidad) => {
        alert(`Se han agregado ${cantidad} productos al carrito!`)
    }

    return (
        <div key={product.id} className="itemCard">
            <img src={product.image} className="itemImage" alt="Product Image" />
                <div className="itemCardBody">
                    <div>
                        <h5 className="itemTitle">{product.name}</h5>
                        <h4>${product.price}</h4>
                    </div>
                    <p className="itemDescription">{product.description}</p>
                    <ItemCountComponent stock={product.stock} onAdd={onAdd} />
                </div>
        </div>
    )
}

export default ItemDetail