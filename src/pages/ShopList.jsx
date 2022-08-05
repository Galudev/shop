import { ShopItem } from "./ShopItem"

export const ShopList = ({ furnitures }) => {
    return (
        <div className="container">
            <div className="row">
                {
                    furnitures.map((furniture) => (
                        <ShopItem key={furniture.id} furniture={furniture} />
                    ))
                }
            </div>
        </div>
    )
}
