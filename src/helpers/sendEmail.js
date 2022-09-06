import Swal from "sweetalert2";
import { shopApi } from "../api"


export const sendEmail = async (subject, message) => {
    try {
        await shopApi.post('/mail', { subject, message });
        Swal.fire('Solicitud enviada con éxito', '', 'success');
        return true;
    } catch (error) {
        console.log(error);
        Swal.fire('Error', 'Inténtelo de nuevo más tarde', 'error');
        return false;
    }
}