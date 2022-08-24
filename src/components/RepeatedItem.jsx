import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDialogStore, useShoppingBasketStore } from '../hooks';


export const RepeatedItem = () => {
    const { isDialogOpen, closeDialog } = useDialogStore();
    const { startIncrementingItem, } = useShoppingBasketStore();

    const handleClose = (event, isCorrect) => {
        if (isCorrect) startIncrementingItem();
        closeDialog();
    };

    return (
        <Dialog
            open={isDialogOpen}
            onClose={(event) => handleClose(event, false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Artículo repetido
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Este artículo ya se encuentra en el carrito, ¿desea añadirlo de nuevo?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={(event) => handleClose(event, false)}>Cancelar</Button>
                <Button onClick={(event) => handleClose(event, true)} autoFocus>
                    Añadir
                </Button>
            </DialogActions>
        </Dialog>
    );
}
