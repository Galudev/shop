import { IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// TODO: Cambiar a Material UI
export const ShopItem = ({ furniture }) => {
    return (
        <div className="col-12 col-lg-4">
            <div className="card m-2">
                <img
                    src={furniture.img}
                    alt={furniture.name}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h3 className="card-title">{furniture.name}</h3>
                    <h5 className="card-text float-end">{furniture.price}</h5>
                    <IconButton className="btn btn-secondary"> <AddShoppingCartIcon /> </IconButton>
                </div>
            </div>
        </div>
    )
}
