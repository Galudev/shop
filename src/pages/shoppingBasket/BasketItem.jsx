import { IconButton } from "@mui/material"
import { useShoppingBasketStore } from "../../hooks";
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// TODO: Hacer el diseño
export const BasketItem = ({ furniture }) => {

    const { startDeletingItem, incrementItem, deletingItem } = useShoppingBasketStore();

    const onClickDel = () => {
        startDeletingItem(furniture.id);
    }

    const onDelete = () => {
        deletingItem(furniture.id);
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
                            <IconButton className="card-text btn position-absolute top-0 end-0 m-4" onClick={onDelete}><DeleteIcon /></IconButton>
                            <div className="position-absolute bottom-0 end-0 m-4">
                                <IconButton className="card-text btn" onClick={onClickDel}><RemoveIcon /></IconButton>
                                <div className="card-text d-inline m-1 ">{furniture.count}</div>
                                <IconButton className="card-text btn mt-auto p-2 bd-highlight" onClick={onClickAdd}><AddIcon /></IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}