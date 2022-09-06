import { useState } from 'react'
import Swal from 'sweetalert2';
import { getPrice, sendEmail } from '../../helpers';
import { useAuthStore, useForm, useFurnitureStore, useShoppingBasketStore } from '../../hooks'
import { LoadingPage } from '..';

const regexCard = /^([0-9]{16})$|(([0-9]{4}\s){3}[0-9]{4})$/;

export const BuyPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSending, setisSending] = useState(false)
    const { shoppingBasketList } = useShoppingBasketStore();
    const { furnitureList } = useFurnitureStore();

    const price = getPrice(shoppingBasketList, furnitureList);

    const contactFormFields = {
        direction: '',
        card: ''
    }

    const formValidations = {
        direction: [(value) => value.length > 0, 'La dirección es obligatoria'],
        card: [(value) => regexCard.test(value), 'Introduzca un número válido']
    }

    const { direction, card, onInputChange, onResetForm, directionValid, cardValid, isFormValid } = useForm(contactFormFields, formValidations);
    const { user } = useAuthStore();
    const { startDeletingAllItems } = useShoppingBasketStore();

    const onSend = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        setisSending(true);
        const isPaid = true; // TODO: Aquí se realizaría y comprobaría que el pago se ha realizado correctamente con un API bancaria.
        if (isPaid) {
            const messageEmail = `nombre: ${user.name}\nemail: ${user.email}\ndirección: ${direction}\nartículos: ${JSON.stringify(shoppingBasketList)}\nprecio: ${price}`;
            const isSend = await sendEmail('Compra', messageEmail);
            if (isSend) {
                onResetForm();
                startDeletingAllItems();
            }
        } else {
            Swal.fire('Error', 'No se ha podido realizar el pago. Inténtelo de nuevo más tarde o póngase en contacto con el servicio de atención al cliente.', 'error');
        }
        setFormSubmitted(false);
        setisSending(false);
    }

    return (
        <div className='container contact position-relative'>
            <form onSubmit={onSend} >
                {
                    isSending ? <LoadingPage /> : <></>
                }
                <div className='row d-flex justify-content-center align-content-center'>
                    <div className='col-8 form-contact'>
                        <div className="mb-3">
                            <h3>Comprar</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Dirección</label>
                            <input
                                type="text"
                                className={`form-control form-field-contact ${(!!directionValid && formSubmitted) ? 'is-invalid' : ''}`}
                                placeholder="Dirección"
                                name='direction'
                                value={direction}
                                onChange={onInputChange}
                            />
                            <div className='invalid-feedback'>
                                {directionValid}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Tarjeta de crédito</label>
                            <input
                                type="text"
                                className={`form-control form-field-contact ${(!!cardValid && formSubmitted) ? 'is-invalid' : ''}`}
                                placeholder="XXXX XXXX XXXX XXXX"
                                name='card'
                                value={card}
                                onChange={onInputChange}
                            />
                            <div className='invalid-feedback'>
                                {cardValid}
                            </div>
                        </div>
                        <div className="mb-3">
                            <h3>Precio: {price}€</h3>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <input
                                type="submit"
                                className="btnSubmit contact-button"
                                value="Confirmar compra" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
