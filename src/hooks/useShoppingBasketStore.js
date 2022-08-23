import { useDispatch, useSelector } from "react-redux"
import { onActive, onAddItem, onDecrementItem, onDeleteItem, onIncrementItem, onLoadList, onSaveList } from "../store";
import { useDialogStore } from "./useDialogStore";


export const useShoppingBasketStore = () => {
    const dispatch = useDispatch();
    const { shoppingBasketList, count } = useSelector(state => state.shoppingBasket);
    const { openDialog } = useDialogStore();

    const startLoadingList = () => {
        dispatch(onLoadList());
    };

    const startAddingItem = (id) => {
        const exist = shoppingBasketList.some(item => item.id === id);
        if (exist) {
            dispatch(onActive(id));
            openDialog();
        } else {
            dispatch(onAddItem(id));
            dispatch(onSaveList());
        }
    };

    const incrementItem = (id) => {
        dispatch(onIncrementItem(id));
        dispatch(onSaveList());
    }

    const startDeletingItem = (id) => {
        const count = shoppingBasketList.filter(item => item.id === id)[0].count;
        if (count > 1) {
            dispatch(onDecrementItem(id));
            dispatch(onSaveList());
        } else {
            deletingItem(id);
        }
    };

    const deletingItem = (id) => {
        dispatch(onDeleteItem(id));
        dispatch(onSaveList());
    }

    return {
        shoppingBasketList,
        count,

        startLoadingList,
        startAddingItem,
        incrementItem,
        startDeletingItem,
        deletingItem
    }
}
