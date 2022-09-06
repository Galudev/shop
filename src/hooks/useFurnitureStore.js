import { useDispatch, useSelector } from "react-redux";
import { shopApi } from "../api"
import { onLoadFurnitureList } from "../store";

export const useFurnitureStore = () => {

    const dispatch = useDispatch();
    const { furnitureList, isLoadingFurniture } = useSelector(state => state.furniture);

    const startLoadingFurniture = async () => {
        try {
            const { data } = await shopApi.get('furniture');
            const { furnitureList } = data;
            dispatch(onLoadFurnitureList(furnitureList));
        } catch (error) {
            console.log(error)
        }
    }
    return {
        furnitureList,
        isLoadingFurniture,

        startLoadingFurniture
    }
}