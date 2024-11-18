import React from "react";
import { useState, useEffect } from  "react"
import { getOneProduct } from "../../mocks/useFetchMock";
import ItemDetailComponent from "./ItemDetailComponent";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        getOneProduct(params.id)
        .then((product) => {
            console.log(product);
            setProduct(product);
        })
        .catch((err) => {
            console.log(err);
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []); // Ejecuta una sola vez al montar el componente

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <ItemDetailComponent product={product} />
        </div>
    );
};

export default ItemDetailContainer

/*

import ItemDetailContainer from './components/ItemDetailContainer'

<ItemDetailContainer />

*/