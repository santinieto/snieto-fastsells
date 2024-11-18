import useFetchMock from './../../mocks/useFetchMock';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemListComponent = ({inputs}) => {
    let { products, loading, error } = useFetchMock();
    const { category } = useParams()

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;
    
    if (category) {
        products = products.filter(product => {
            return product.category === category;
        })
    }
    
    return (
        <div className="ItemListContainer">
            <h1 className="ItemListHeader">
                {inputs.greetings}
            </h1>
            <div className="ItemListBody">
                {products && products.map((product) => (
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
                ))}
            </div>
        </div>
    )
}

export default ItemListComponent