import { IconButton } from "@mui/material"
import { useShoppingBasketStore } from "../../hooks";
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";


export const BasketItem = ({ furniture }) => {

    const { startDecrementingItem, startIncrementingItem, startDeletingItem } = useShoppingBasketStore();

    const navigate = useNavigate();

    const getDetails = () => {
        navigate(`/furniture/${furniture.id}`);
    }

    const onClickDecrement = () => {
        startDecrementingItem(furniture.id);
    }

    const onClickDelete = () => {
        startDeletingItem(furniture.id);
    }

    const onClickIncrement = () => {
        startIncrementingItem(furniture.id);
    }

    return (
        <div className="col-12">
            <div className="card mb-2 mt-2">
                <div className="row g-0">
                    <div className="col-5 col-sm-5 col-md-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-center">
                        <img src={furniture.img} className="img-fluid rounded-start p-2" alt={furniture.name} onClick={getDetails} />
                    </div>
                    <div className="col-7 col-sm-7 col-md-8 col-lg-9 col-xl-10 card-body pe-2 ps-2 p-4 m-0 d-flex flex-row">
                        <div className="col-6 col-sm-7 col-md-8 col-lg-9 col-xl-10 d-flex flex-column justify-content-between">
                            <h5 className="card-title text-truncate fs-2">{furniture.name}</h5>
                            <p className="card-text fs-5 mb-2">{`${furniture.price}€`}</p>
                        </div>
                        <div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-center">
                                <IconButton className="card-text btn p-0" onClick={onClickDelete}><DeleteIcon /></IconButton>
                            </div>
                            <div className="d-flex justify-content-center align-content-center">
                                <IconButton className="card-text btn" onClick={onClickDecrement}><RemoveIcon /></IconButton>
                                <div className="card-text d-inline m-1">{furniture.count}</div>
                                <IconButton className="card-text btn mt-auto p-2 bd-highlight" onClick={onClickIncrement}><AddIcon /></IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}