import { createSlice } from "@reduxjs/toolkit";

export const shoppingBasketSlice = createSlice({
    name: 'shoppingBasket',
    initialState: {
        isLoadingShoppingBasket: true,
        shoppingBasketList: [],
        active: null,
        count: 0
    },
    reducers: {
        onAddItem: (state, { payload }) => {
            state.count += 1;
            state.shoppingBasketList.push({ id: payload, count: 1 });
        },
        onIncrementItem: (state, { payload = state.active }) => {
            state.count += 1;
            state.shoppingBasketList = state.shoppingBasketList.map(item => {
                if (item.id === payload) {
                    item.count += 1;
                }
                return item;
            });
        },
        onDeleteItem: (state, { payload }) => {
            for (let i = 0; i < state.shoppingBasketList.length; i++) {
                if (state.shoppingBasketList[i].id === payload)
                    state.count -= state.shoppingBasketList[i].count;
                break;
            }
            state.shoppingBasketList = state.shoppingBasketList.filter(item => item.id !== payload)
        },
        onDecrementItem: (state, { payload }) => {
            state.count -= 1;
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
            state.count = JSON.parse(localStorage.getItem('shoppingBasketCount')) ?? 0;
            state.shoppingBasketList = JSON.parse(localStorage.getItem('shoppingBasket')) ?? [];
        },
        onSaveList: (state) => {
            localStorage.setItem('shoppingBasketCount', JSON.stringify(state.count));
            localStorage.setItem('shoppingBasket', JSON.stringify(state.shoppingBasketList));
        }
    }
});
// Action creators are generated for each case reducer function
export const { onAddItem, onIncrementItem, onDeleteItem, onDecrementItem, onActive, onLoadList, onSaveList } = shoppingBasketSlice.actions;