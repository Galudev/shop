import { EmptyList } from "../../components";
import { getFurnitureById } from "../../helpers"
import { BasketItem } from "./BasketItem"


export const BasketList = ({ furniture }) => {

    const furnitureForShopping = furniture.map(item => {
        const furniture = getFurnitureById(item.id)
        return { ...furniture, count: item.count };
    });

    const isEmpty = furniture.length === 0

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
        </>
    )
}
