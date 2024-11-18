import React from "react";
import { useState, useEffect } from  "react"
import { getOneProduct } from "../../mocks/data";
import ItemDetailComponent from "./ItemDetailComponent";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        getOneProduct("1")
        .then((product) => {
            setProduct(product)
        })
        .catch((err) => console.log(err))
    })
    
    return (
        <div>
            <ItemDetailComponent product={product}/>
        </div>
    )
}

export default ItemDetailContainer

/*

import ItemDetailContainer from './components/ItemDetailContainer'

<ItemDetailContainer />

*/