import { useDispatch, useSelector } from "react-redux"
import { onActive, onAddItem, onDecrementItem, onDeleteItem, onIncrementItem, onLoad, onSave } from "../store";
import { useDialogStore } from "./useDialogStore";


export const useShoppingBasketStore = () => {
    const dispatch = useDispatch();
    const { shoppingBasketList, count } = useSelector(state => state.shoppingBasket);
    const { openDialog } = useDialogStore();

    const startLoadingList = () => {
        const count = JSON.parse(localStorage.getItem('shoppingBasketCount')) ?? 0
        const list = JSON.parse(localStorage.getItem('shoppingBasket')) ?? []
        dispatch(onLoad({ count, list }));
    };

    const startAddingItem = async (id) => {
        const exist = shoppingBasketList.some(item => item.id === id);
        if (exist) {
            dispatch(onActive(id));
            openDialog();
        } else {
            dispatch(onAddItem(id));
            dispatch(onSave());
        }
    };

    const startIncrementingItem = (id) => {
        dispatch(onIncrementItem(id));
        dispatch(onSave());
    }

    const startDecrementingItem = (id) => {
        const count = shoppingBasketList.filter(item => item.id === id)[0].count;
        if (count > 1) {
            dispatch(onDecrementItem(id));
            dispatch(onSave());
        } else {
            startDeletingItem(id);
        }
    };

    const startDeletingItem = (id) => {
        dispatch(onDeleteItem(id));
        dispatch(onSave());
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
