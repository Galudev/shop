import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        isDialogOpen: false,
    },
    reducers: {
        onOpenDialog: (state) => {
            state.isDialogOpen = true;
        },
        onCloseDialog: (state) => {
            state.isDialogOpen = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDialog, onCloseDialog } = dialogSlice.actions;