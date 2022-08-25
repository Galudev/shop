import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getFurnitureByCategory } from "../../helpers";
import { ShopList } from "./ShopList";


export const ShopFilter = () => {

    const { category } = useParams();

    const furnitureByCategory = useMemo(() => getFurnitureByCategory(category), [category]);

    return (
        <ShopList furniture={furnitureByCategory} />
    )
}
