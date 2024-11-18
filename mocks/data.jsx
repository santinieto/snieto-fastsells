const products = [
    {
        id: "1",
        name: "Object 1",
        price: 14,
        stock: 100,
        description: "A random description",
        image: 'https://picsum.photos/200',
        category: "sports"
    },
    {
        id: "2",
        name: "Object 2",
        price: 32,
        stock: 7542,
        description: "A random description",
        image: 'https://picsum.photos/201',
        category: "clothes"
    },
    {
        id: "3",
        name: "Object 2",
        price: 13,
        stock: 57,
        description: "A random description",
        image: 'https://picsum.photos/202',
        category: "sports"
    },
]

export const getProducts = () => {
    let err = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (err) {
                reject("Hubo un error al obtener los productos")
            } else {
                resolve(products)
            }
        }, 4000)
    })
}

export const getOneProduct = (id) => {
    let err = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(err) {
                reject("Se produjo un error al obtener el producto " + id)
            } else {
                let product = products.find((product) => product.id = id)
                resolve(product)
            }
        }, 3000)
    })
}

/*
function App() {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res) => {setProducts(res)})
        .catch((err) => {console.log(err)})
        .finally(() => {setLoading(false)})
    }, [])
    
    return (
        <>
        {
            loading ? <p>Cargando...</p> :
            products.map((product) =>
            <div className="card" style={{width: "18rem"}} key={product.id}>
                <img src={product.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.stock}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
            )
        }
        </>
    )
}
*/