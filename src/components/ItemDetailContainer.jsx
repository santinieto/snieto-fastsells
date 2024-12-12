import React from "react";
import { useState, useEffect } from  "react"
import { getOneProduct } from "../../mocks/useFetchMock";
import ItemDetailComponent from "./ItemDetailComponent";
import { useParams } from "react-router-dom";
import { collection, doc, query, getDoc, getDocs, where } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const params = useParams();
    const { id } = useParams()
    const [invalidItem, setInvalidItem]= useState(false)

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
        
        // Busco por ID de Firebase
        //creamos una referencia
        const docRef = doc(productsCollection, id)
        // const docRef = doc(db, "productos", id)
        //traer el documento
        getDoc(docRef)
        .then((res)=> {
            if(res.data()){
                setProduct({id: res.id, ...res.data()})
            } else {
                setInvalidItem(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
        
        // // Busco por ID interno del JSON
        // const docQuery = query(productsCollection, where("internal_id", "==", params.id));
        
        // // Obtengo la informacion del producto
        // getDocs(docQuery)
        // .then((res) => {
        //     if (!res.empty) {
        //         // Extraemos el primer documento que coincide
        //         const doc = res.docs[0];
        //         setProduct({
        //             id: doc.id, // El ID asignado por Firebase
        //             ...doc.data() // Los datos del documento, incluido el campo `id`
        //         });
        //     } else {
        //         console.log("El documento " + params.id + " no existe");
        //         setError("Producto no encontrado");
        //     }
        // })
        // .catch((error) => {
        //     console.log(error);
        //     setError(true);
        // })
        // .finally(() => setLoading(false))
    }, []);  // Ejecuta una sola vez al montar el componente

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
        {
            loading ?
            <Loader/> 
            : invalidItem ?
                <div>
                    <h3>El producto no existe!</h3>
                    <Link to='/' className='btn btn-dark'>Volver a home</Link>
                </div> 
                : <ItemDetailComponent product={product} />
        }
        </div>
    );
};

export default ItemDetailContainer

/*

import ItemDetailContainer from './components/ItemDetailContainer'

<ItemDetailContainer />

*/