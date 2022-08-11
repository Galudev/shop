import { IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// TODO: poner data con useState
// TODO: Mostrar alerta añadir de nuevo
export const ShopItem = ({ furniture }) => {

    let data = [];

    const addToBuy = (event) => {
        data = JSON.parse(localStorage.getItem('buy')) ?? [];
        let exist = false
        for (let item of data) {
            if (item.id === furniture.id) {
                item.count += 1;
                exist = true;
                break;
            }
        }
        if (!exist) data = [...data, { id: furniture.id, count: 1 }];
        localStorage.setItem('buy', JSON.stringify(data));
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
                            onClick={addToBuy}
                        >
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
