import { useNavigate } from "react-router-dom";
import { EmptyList } from "../../components";
import { getFurnitureList } from "../../helpers"
import { BasketItem } from "./BasketItem"


export const BasketList = ({ furniture }) => {

    const navigate = useNavigate();

    const furnitureForShopping = furniture.map(item => {
        const furniture = getFurnitureList().getFurnitureById(item.id)
        return { ...furniture, count: item.count };
    });

    const isEmpty = furniture.length === 0

    const onClickBuy = () => {
        navigate('/buy');
    }

    return (
        <>
            <div className="row">
                {
                    furnitureForShopping.map((furniture) => (
                        <BasketItem key={furniture.id} furniture={furniture} />
                    ))
                }
            </div>

            <EmptyList isEmpty={isEmpty} message="No hay ningún elemento en el carrito" />

            <div className='d-flex justify-content-center'>
                <button
                    className="btnSubmit contact-button mt-4 mb-5"
                    style={{ display: isEmpty ? 'none' : '' }}
                    onClick={onClickBuy}
                >
                    Comprar
                </button>
            </div>

        </>
    )
}
