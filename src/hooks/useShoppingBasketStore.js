import { useDispatch, useSelector } from "react-redux"
import { onActive, onAddItem, onDecrementItem, onDeleteItem, onIncrementItem, onLoadList, onSaveList } from "../store";
import { useDialogStore } from "./useDialogStore";


export const useShoppingBasketStore = () => {
    const dispatch = useDispatch();
    const { shoppingBasketList } = useSelector(state => state.shoppingBasket);
    const { openDialog } = useDialogStore();

    const startLoadingList = () => {
        dispatch(onLoadList());
    };

    const startAddingItem = (id) => {
        const exist = shoppingBasketList.some(item => item.id === id);
        if (exist) {
            dispatch(onActive(id))
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
        const exist = shoppingBasketList.some(item => item.id === id)
        if (exist) {
            dispatch(onDecrementItem(id));
        } else {
            dispatch(onDeleteItem(id));
        }
        dispatch(onSaveList());
    };

    return {
        startLoadingList,
        startAddingItem,
        incrementItem,
        startDeletingItem
    }
}
