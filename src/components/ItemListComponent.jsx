import useFetchMock from './../../mocks/useFetchMock';

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
                                <div>
                                    <h5 className="itemTitle">{product.name}</h5>
                                    <h4>${product.price}</h4>
                                </div>
                                <p className="itemDescription">{product.description}</p>
                                <button type="button" class="btn btn-info">Más información</button>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListComponent