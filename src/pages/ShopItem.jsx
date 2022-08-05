

export const ShopItem = ({ furniture }) => {
    return (
        <div className="col-4">
            <div className="card m-2">
                <img
                    src={furniture.img}
                    alt={furniture.name}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h3 className="card-title">{furniture.name}</h3>
                    <h5 className="card-text float-end">{furniture.price}</h5>
                </div>
            </div>
        </div>
    )
}
