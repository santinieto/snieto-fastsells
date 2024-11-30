import React from "react";
import { useState, useEffect } from  "react"
import { getOneProduct } from "../../mocks/useFetchMock";
import ItemDetailComponent from "./ItemDetailComponent";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    // // USO EL MOCK
    // useEffect(() => {
    //     setLoading(true);
    //     getOneProduct(params.id)
    //     .then((product) => {
    //         console.log(product);
    //         setProduct(product);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         setError(err.message);
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //     })
    // }, []); // Ejecuta una sola vez al montar el componente
    
    // FIREBASE
    useEffect(() => {
        setLoading(true);
        // Creamos una referencia con una consulta usando `where`
        const productsCollection = collection(db, "productos");
        const docQuery = query(productsCollection, where("id", "==", params.id));
        
        // Obtengo la informacion del producto
        getDocs(docQuery)
        .then((res) => {
            if (!res.empty) {
                // Extraemos el primer documento que coincide
                const doc = res.docs[0];
                setProduct({
                    id: doc.id, // El ID asignado por Firebase
                    ...doc.data() // Los datos del documento, incluido el campo `id`
                });
            } else {
                console.log("El documento no existe");
                setError("Producto no encontrado");
            }
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        })
        .finally(() => setLoading(false))
    }, []);  // Ejecuta una sola vez al montar el componente

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