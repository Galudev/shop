import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { getPrice } from '../../helpers';
import { useForm, useShoppingBasketStore } from '../../hooks'

const regexCard = /^(?:(\d{4}\s?){4}|(\d{4,6}\s?){3})$/;

export const BuyPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { shoppingBasketList } = useShoppingBasketStore();

    const price = getPrice(shoppingBasketList);

    const contactFormFields = {
        direction: '',
        card: ''
    }

    const formValidations = {
        direction: [(value) => value.length > 0, 'La dirección es obligatoria'],
        card: [(value) => regexCard.test(value), 'Introduzca un número válido']
    }

    const { direction, card, onInputChange, directionValid, cardValid, isFormValid } = useForm(contactFormFields, formValidations);

    const onSend = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        localStorage.setItem("contact", JSON.stringify({ direction, card, shoppingBasketList, price }));
        Swal.fire('¡Compra realizada con éxito!', '', 'success');
    }

    return (
        <div className='container contact'>
            <form onSubmit={onSend} >
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
