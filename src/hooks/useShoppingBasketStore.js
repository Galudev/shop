import { useDispatch, useSelector } from "react-redux"
import { shopApi } from "../api";
import { onActive, onAddItem, onDecrementItem, onDeleteItem, onIncrementItem, onLoad } from "../store";
import { useDialogStore } from "./useDialogStore";


export const useShoppingBasketStore = () => {
    const dispatch = useDispatch();
    const { shoppingBasketList, count } = useSelector(state => state.shoppingBasket);
    const { openDialog } = useDialogStore();

    const startLoadingList = (list = []) => {
        let count = 0;
        list.map(item => {
            count += item.count;
        })
        dispatch(onLoad({ count, list }));
    };

    const startAddingItem = async (id) => {
        const exist = shoppingBasketList.some(item => item.id === id);
        if (exist) {
            dispatch(onActive(id));
            openDialog();
        } else {
            try {
                await shopApi.post(`/basket/${id}`);
                dispatch(onAddItem(id));
            } catch (error) {
                console.log(error);
            }
        }
    };

    const startIncrementingItem = async (id) => {
        const count = shoppingBasketList.filter(item => item.id === id)[0].count;
        try {
            await shopApi.put('/basket', { id, count: count + 1 })
            dispatch(onIncrementItem(id));
        } catch (error) {
            console.log(error);
        }
    }

    const startDecrementingItem = async (id) => {
        const count = shoppingBasketList.filter(item => item.id === id)[0].count;
        if (count > 1) {
            try {
                await shopApi.put('/basket', { id, count: count - 1 })
                dispatch(onDecrementItem(id));
            } catch (error) {
                console.log(error)
            }
        } else {
            startDeletingItem(id);
        }
    };

    const startDeletingItem = async (id) => {
        try {
            await shopApi.delete(`/basket/${id}`);
            dispatch(onDeleteItem(id));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        shoppingBasketList,
        count,

        startLoadingList,
        startAddingItem,
        startIncrementingItem,
        startDeletingItem,
        startDecrementingItem
    }
}
