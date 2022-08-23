import { getFurnitureById } from "../../helpers"
import { BasketItem } from "./BasketItem"


export const BasketList = ({ furniture }) => {

    const furnitureForShopping = furniture.map(item => {
        const furniture = getFurnitureById(item.id)
        return { ...furniture, count: item.count };
    });

    return (
        <div className="row">
            {
                furnitureForShopping.map((furniture) => (
                    <BasketItem key={furniture.id} furniture={furniture} />
                ))
            }
        </div>
    )
}
