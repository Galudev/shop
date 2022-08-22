import React from 'react'
import { useForm } from '../hooks'

const contactFormFields = {
    name: '',
    email: '',
    message: ''
};

export const Contact = () => {

    const { name, email, message, onInputChange } = useForm(contactFormFields);

    const onSend = (event) => {
        event.preventDefault();

    }

    return (
        <div className='container contact'>
            <form onSubmit={onSend} >
                <div className='row d-flex justify-content-center align-content-center'>
                    <div className='col-8 form-contact'>
                        <div className="mb-3">
                            <h3>Contacto</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Nombre</label>
                            <input
                                type="text"
                                className="form-control form-field-contact"
                                placeholder="Nombre"
                                name='name'
                                value={name}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control form-field-contact"
                                placeholder="nombre@ejemplo.com"
                                name='email'
                                value={email}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingTextarea2">Mensaje</label>
                            <textarea
                                type="text"
                                className="form-control form-field-contact"
                                placeholder="Introduzca el mensaje aquí"
                                rows="5"
                                name='message'
                                value={message}
                                onChange={onInputChange}
                            />
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
