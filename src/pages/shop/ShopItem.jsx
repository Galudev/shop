import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useShoppingBasketStore } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const ShopItem = ({ furniture }) => {

    const navigate = useNavigate();

    const { startAddingItem } = useShoppingBasketStore();

    const onClickAdd = (event) => {
        event.preventDefault();
        startAddingItem(furniture._id);
    }

    const getDetails = () => {
        navigate(`/furniture/${furniture._id}`);
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0">
            <div className="card m-2">
                <img
                    src={furniture.img}
                    alt={furniture.name}
                    className="card-img-top"
                    onClick={getDetails}
                />
                <div className="card-body row">
                    <div className="col-9">
                        <h3 className="card-title text-truncate">{furniture.name}</h3>
                    </div>
                    <div className="col-3 btn-shop">
                        <IconButton
                            className="btn"
                            onClick={onClickAdd}
                        >
                            <AddShoppingCartIcon style={{ color: '#333333' }} />
                        </IconButton>
                    </div>
                    <div className="col">
                        <h5 className="card-text">{`${furniture.price}€`}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
