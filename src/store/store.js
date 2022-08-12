import { configureStore } from '@reduxjs/toolkit';
import { shoppingBasketSlice, dialogSlice } from './';

export const store = configureStore({
    reducer: {
        shoppingBasket: shoppingBasketSlice.reducer,
        dialog: dialogSlice.reducer
    },
})