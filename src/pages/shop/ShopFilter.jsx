import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getFurnitureList } from "../../helpers";
import { useFurnitureStore } from "../../hooks";
import { ShopList } from "./ShopList";


export const ShopFilter = () => {

    const { category } = useParams();
    const { furnitureList } = useFurnitureStore();
    const { getFurnitureByCategory } = getFurnitureList(furnitureList)

    const furnitureByCategory = useMemo(() => getFurnitureByCategory(category), [category]);

    return (
        <ShopList furniture={furnitureByCategory} />
    )
}
