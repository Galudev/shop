import React, { useState } from 'react'
import { sendEmail } from '../../helpers';
import { useAuthStore, useForm } from '../../hooks'
import { LoadingPage } from '..';

const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

export const Contact = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const { user } = useAuthStore();


    const contactFormFields = () => {
        if (user.name) {
            return {
                name: user.name,
                email: user.email,
                message: ''
            };
        } else {
            return {
                name: '',
                email: '',
                message: ''
            };
        }
    }

    const formValidations = {
        name: [(value) => value.length > 0, 'El nombre es obligatorio'],
        email: [(value) => regexEmail.test(value), 'Introduzca un correo electrónico válido'],
        message: [(value) => value.length > 0, 'Introduzca un mensaje']
    }

    const { name, email, message, onInputChange, onResetForm, nameValid, emailValid, messageValid, isFormValid } = useForm(contactFormFields, formValidations);

    const onSend = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        const messageEmail = `nombre: ${name}\nemail: ${email}\nmensaje: ${message}`;
        setIsSending(true);
        const isSend = await sendEmail('Solicitud de contacto', messageEmail);
        setIsSending(false);
        if (isSend) {
            setFormSubmitted(false);
            onResetForm();
        }
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
                            <h3>Contacto</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Nombre</label>
                            <input
                                type="text"
                                className={`form-control form-field-contact ${(!!nameValid && formSubmitted) ? 'is-invalid' : ''}`}
                                placeholder="Nombre"
                                name='name'
                                value={name}
                                onChange={onInputChange}
                            />
                            <div className='invalid-feedback'>
                                {nameValid}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Correo electrónico</label>
                            <input
                                type="text"
                                className={`form-control form-field-contact ${(!!emailValid && formSubmitted) ? 'is-invalid' : ''}`}
                                placeholder="nombre@ejemplo.com"
                                name='email'
                                value={email}
                                onChange={onInputChange}
                            />
                            <div className='invalid-feedback'>
                                {emailValid}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingTextarea2">Mensaje</label>
                            <textarea
                                type="text"
                                className={`form-control form-field-contact ${(!!messageValid && formSubmitted) ? 'is-invalid' : ''}`}
                                placeholder="Introduzca el mensaje aquí"
                                rows="5"
                                name='message'
                                value={message}
                                onChange={onInputChange}
                            />
                            <div className='invalid-feedback'>
                                {messageValid}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <input
                                type="submit"
                                className="btnSubmit contact-button"
                                value="Enviar" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
