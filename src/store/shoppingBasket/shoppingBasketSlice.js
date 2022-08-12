import { createSlice } from "@reduxjs/toolkit";

export const shoppingBasketSlice = createSlice({
    name: 'shoppingBasket',
    initialState: {
        isLoadingShoppingBasket: true,
        shoppingBasketList: [],
        active: null
    },
    reducers: {
        onAddItem: (state, { payload }) => {
            state.shoppingBasketList.push({ id: payload, count: 1 });
        },
        onIncrementItem: (state) => {
            state.shoppingBasketList = state.shoppingBasketList.map(item => {
                if (item.id === state.active) {
                    item.count += 1;
                }
                return item;
            });
        },
        onDeleteItem: (state, { payload }) => {
            state.shoppingBasketList = state.shoppingBasketList.filter(item => item.id !== payload)
        },
        onDecrementItem: (state, { payload }) => {
            state.shoppingBasketList = state.shoppingBasketList.map(item => {
                if (item.id === payload) {
                    item.count -= 1;
                }
                return item;
            });
        },
        onActive: (state, { payload }) => {
            state.active = payload;
        },
        onLoadList: (state) => {
            state.shoppingBasketList = JSON.parse(localStorage.getItem('shoppingBasket')) ?? [];
        },
        onSaveList: (state) => {
            localStorage.setItem('shoppingBasket', JSON.stringify(state.shoppingBasketList));
        }
    }
});
// Action creators are generated for each case reducer function
export const { onAddItem, onIncrementItem, onDeleteItem, onDecrementItem, onActive, onLoadList, onSaveList } = shoppingBasketSlice.actions;