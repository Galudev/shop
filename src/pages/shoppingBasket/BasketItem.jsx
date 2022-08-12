import { IconButton } from "@mui/material"
import { useShoppingBasketStore } from "../../hooks";

// TODO: Hacer el diseño
export const BasketItem = ({ furniture }) => {

    const { startDeletingItem, incrementItem } = useShoppingBasketStore();

    const onClickDel = () => {
        startDeletingItem(furniture.id);
    }

    const onClickAdd = () => {
        incrementItem(furniture.id);
    }

    return (
        <div className="col-12">
            <div className="card mb-3 mt-3">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={furniture.img} className="img-fluid rounded-start" alt={furniture.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{furniture.name}</h5>
                            <p className="card-text">{furniture.price}</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card-body">
                            <button className="card-text btn" onClick={onClickDel}>-</button>
                            <div className="card-text d-inline m-1 ">{furniture.count}</div>
                            <button className="card-text btn" onClick={onClickAdd}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}