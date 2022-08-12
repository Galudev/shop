import { IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useShoppingBasketStore } from "../hooks";

// TODO: poner data con useState
// TODO: Mostrar alerta añadir de nuevo
export const ShopItem = ({ furniture }) => {

    const { startAddingItem } = useShoppingBasketStore();
    const onClickAdd = (event) => {
        event.preventDefault();
        startAddingItem(furniture.id);
    }

    return (
        <div className="col-12 col-lg-4">
            <div className="card m-2">
                <img
                    src={furniture.img}
                    alt={furniture.name}
                    className="card-img-top"
                />
                <div className="card-body row">
                    <div className="col-10">
                        <h3 className="card-title">{furniture.name}</h3>
                        <h5 className="card-text">{furniture.price}</h5>
                    </div>
                    <div className="col-2">
                        <IconButton
                            className="btn btn-secondary position-absolute bottom-0 end-0 translate-middle"
                            onClick={onClickAdd}
                        >
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
