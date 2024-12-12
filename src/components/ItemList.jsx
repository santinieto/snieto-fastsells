import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <div className="ItemListBody">
            {products && products.map((product) => (
                <Item product={product} key={product.id}/>
            ))}
        </div>
        
    )
}

export default ItemList