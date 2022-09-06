import { useNavigate } from "react-router-dom";
import { LoadingPage } from "..";
import { EmptyList } from "../../components";
import { getFurnitureList } from "../../helpers"
import { useFurnitureStore, useShoppingBasketStore } from "../../hooks";
import { BasketItem } from "./BasketItem"


export const BasketList = () => {

    const navigate = useNavigate();

    const { shoppingBasketList, isLoadingShoppingBasket } = useShoppingBasketStore();
    const { furnitureList } = useFurnitureStore();

    const { getFurnitureById } = getFurnitureList(furnitureList);

    const furnitureForShopping = shoppingBasketList.map(item => {
        const furniture = getFurnitureById(item.id)
        return { ...furniture, count: item.count };
    });

    const isEmpty = shoppingBasketList.length === 0

    const onClickBuy = () => {
        navigate('/buy');
    }

    if (isLoadingShoppingBasket) {
        return (
            <LoadingPage />
        )
    }

    return (
        <>
            <div className="row">
                {
                    furnitureForShopping.map((furniture) => (
                        <BasketItem key={furniture._id} furniture={furniture} />
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
