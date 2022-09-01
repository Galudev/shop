import { createSlice } from '@reduxjs/toolkit';

export const furnitureSlice = createSlice({
    name: 'furniture',
    initialState: {
        furnitureList: []
    },
    reducers: {
        onLoadFurnitureList: (state, { payload }) => {
            state.furnitureList = payload;
        },
    }
});
// Action creators are generated for each case reducer function
export const { onLoadFurnitureList } = furnitureSlice.actions;