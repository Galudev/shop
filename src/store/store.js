import { configureStore } from '@reduxjs/toolkit';
import { shoppingBasketSlice, dialogSlice, authSlice, furnitureSlice } from './';

export const store = configureStore({
    reducer: {
        shoppingBasket: shoppingBasketSlice.reducer,
        dialog: dialogSlice.reducer,
        auth: authSlice.reducer,
        furniture: furnitureSlice.reducer
    },
})