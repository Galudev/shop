import { createSlice } from '@reduxjs/toolkit';

export const furnitureSlice = createSlice({
    name: 'furniture',
    initialState: {
        isLoadingFurniture: true,
        furnitureList: []
    },
    reducers: {
        onLoadFurnitureList: (state, { payload }) => {
            state.furnitureList = payload;
            state.isLoadingFurniture = false;
        },
    }
});
// Action creators are generated for each case reducer function
export const { onLoadFurnitureList } = furnitureSlice.actions;