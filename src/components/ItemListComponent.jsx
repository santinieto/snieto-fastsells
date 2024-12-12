import { useEffect, useState } from 'react';
import useFetchMock from './../../mocks/useFetchMock';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
import ItemList from './ItemList'

const ItemListComponent = ({inputs}) => {
    // // MOCK LOCAL
    // let { products, loading, error } = useFetchMock();
    // const { category } = useParams()
    
    // if (category) {
    //     products = products.filter(product => {
    //         return product.category === category;
    //     })
    // }
    
    // FIREBASE
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { category } = useParams()
    
    useEffect(() => {
        setLoading(true);
        
        // Conectamos con nuestra coleccion
        const productsCollection = category
        ? query(collection(db, "productos"), where("category", "==", category))
        : collection(db, "productos")
        
        // Pido los documentos
        getDocs(productsCollection)
        .then((res) => {
            const list = res.docs.map((product) =>{
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error) => {
            setError(true)
            console.log(error)
        })
        .finally(() => setLoading(false))
    }, [category])
    
    // ESTE CODIGO TIENE QUE ESTAR UNA SOLA VEZ PUESTO
    // SIRVE PARA CARGAR LOS PRODUCTOS EN FIREBASE
    // SI YA ESTAN LOS PRODUCTOS, HAY QUE SACARLO
    const addData = () => {
        console.log(products)
        const collectionToAdd = collection(db, "productos")
        products.map((item) => {
            addDoc(collectionToAdd, item)
        })
    }
    
    // Esto va siempre
    if (loading) return <div className="ItemListContainer">Cargando productos...</div>;
    if (error) return <div className="ItemListContainer">Error: {error}</div>;
    
    return (
        <div className="ItemListContainer">
            
            {/* ESTE CODIGO TIENE QUE ESTAR UNA SOLA VEZ PUESTO
            SIRVE PARA CARGAR LOS PRODUCTOS EN FIREBASE
            SI YA ESTAN LOS PRODUCTOS, HAY QUE SACARLO  */}
            {/* {loading ? <></> : <button className='btn btn-danger' onClick={addData} >Actualizar coleccion de Firebase</button>
            } */}
            
            <h1 className="ItemListHeader">
                {inputs.greetings}
            </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListComponent