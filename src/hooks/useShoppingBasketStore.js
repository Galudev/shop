import { useDispatch, useSelector } from "react-redux"
import { onActive, onAddItem, onDecrementItem, onDeleteItem, onIncrementItem, onLoad } from "../store";
import { useDialogStore } from "./useDialogStore";


export const useShoppingBasketStore = () => {
    const dispatch = useDispatch();
    const { shoppingBasketList, count } = useSelector(state => state.shoppingBasket);
    const { openDialog } = useDialogStore();

    const startSavingList = () => {
        localStorage.setItem('shoppingBasketCount', JSON.stringify(count));
        localStorage.setItem('shoppingBasket', JSON.stringify(shoppingBasketList));
    };

    const startLoadingList = () => {
        const count = JSON.parse(localStorage.getItem('shoppingBasketCount')) ?? 0
        const list = JSON.parse(localStorage.getItem('shoppingBasket')) ?? []
        dispatch(onLoad({ count, list }));
    };

    const startAddingItem = (id) => {
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
        startDecrementingItem,
        startSavingList
    }
}
