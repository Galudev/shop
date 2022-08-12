import { useDispatch, useSelector } from "react-redux"
import { onCloseDialog, onOpenDialog } from "../store";


export const useDialogStore = () => {

    const dispatch = useDispatch();

    const {
        isDialogOpen
    } = useSelector(state => state.dialog);

    const openDialog = () => {
        dispatch(onOpenDialog())
    }

    const closeDialog = () => {
        dispatch(onCloseDialog())
    }

    return {
        //* Propiedades
        isDialogOpen,

        //* Métodos
        openDialog,
        closeDialog
    }

}