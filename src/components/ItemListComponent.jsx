import useFetchMock from './../../mocks/useFetchMock';
import ItemCountComponent from './../components/ItemCountComponent'

const ItemListComponent = ({params}) => {
    const { products, loading, error } = useFetchMock();

    const onAdd = (cantidad) => {
        alert(`Se han agregado ${cantidad} productos al carrito!`)
    }

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <div className="ItemListContainer">
            <h1 className="ItemListHeader">
                {params.greetings}
            </h1>
            <div className="ItemListBody">
                {products && products.map((product) => (
                    <div key={product.id} className="itemCard">
                        <img src={product.img} className="itemImage" alt="Product Image" />
                            <div className="itemCardBody">
                                <h5 className="itemTitle">{product.name}</h5>
                                <p className="itemDescription">{product.description}</p>
                                <ItemCountComponent stock={12} onAdd={onAdd} />
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListComponent