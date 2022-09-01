import { EmptyList } from "../../components";
import { ShopItem } from "./ShopItem"

export const ShopList = ({ furniture }) => {

    const isEmpty = furniture.length === 0;

    return (
        <>
            <div className="row">
                {
                    furniture.map((furniture) => (
                        <ShopItem key={furniture._id} furniture={furniture} />
                    ))
                }
            </div>

            <EmptyList isEmpty={isEmpty} message="No se ha encontrado ningún elemento" />
        </>
    )
}
