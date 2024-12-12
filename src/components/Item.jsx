import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div key={product.id} className="itemCard">
            <img src={product.img} className="itemImage" alt="Product Image" />
            <div className="itemCardBody">
                <div className='itemCategory'>{product.category}</div>
                <div>
                    <h5 className="itemTitle">{product.name}</h5>
                    <h4>${product.price}</h4>
                </div>
                <p className="itemDescription">{product.description}</p>
                <Link to={`/item/${product.id}`} className="btn btn-info">Más información</Link>
            </div>
        </div>
    )
}

export default Item