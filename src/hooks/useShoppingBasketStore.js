import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { onActive, onAddItem, onDecrementItem, onDeleteItem, onIncrementItem, onLoadList } from "../store";
import { useDialogStore } from "./useDialogStore";


export const useShoppingBasketStore = () => {
    const dispatch = useDispatch();
    const { shoppingBasketList, count } = useSelector(state => state.shoppingBasket);
    const { openDialog } = useDialogStore();

    useEffect(() => {
        localStorage.setItem('shoppingBasketCount', JSON.stringify(count));
        localStorage.setItem('shoppingBasket', JSON.stringify(shoppingBasketList));
    }, [shoppingBasketList, count])


    const startLoadingList = () => {
        const count = JSON.parse(localStorage.getItem('shoppingBasketCount')) ?? 0
        const list = JSON.parse(localStorage.getItem('shoppingBasket')) ?? []
        dispatch(onLoadList({ count, list }));
    };

    const startAddingItem = async (id) => {
        const exist = shoppingBasketList.some(item => item.id === id);
        if (exist) {
            dispatch(onActive(id));
            openDialog();
        } else {
            dispatch(onAddItem(id));
        }
    };

    const startIncrementingItem = (id) => {
        dispatch(onIncrementItem(id));
    }

    const startDecrementingItem = (id) => {
        const count = shoppingBasketList.filter(item => item.id === id)[0].count;
        if (count > 1) {
            dispatch(onDecrementItem(id));
        } else {
            startDeletingItem(id);
        }
    };

    const startDeletingItem = (id) => {
        dispatch(onDeleteItem(id));
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
