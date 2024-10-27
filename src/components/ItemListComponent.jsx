const ItemListComponent = ({params}) => {
    return (
        <div className="ItemListContainer">
            <h1 className="ItemListHeader">
                {params.greetings}
            </h1>
            <div className="ItemListBody">
                <h2>
                    Lista de items
                </h2>
            </div>
        </div>
    )
}

export default ItemListComponent