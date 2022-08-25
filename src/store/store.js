import { configureStore } from '@reduxjs/toolkit';
import { shoppingBasketSlice, dialogSlice, authSlice } from './';

export const store = configureStore({
    reducer: {
        shoppingBasket: shoppingBasketSlice.reducer,
        dialog: dialogSlice.reducer,
        auth: authSlice.reducer
    },
})