import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks'

const contactFormFields = {
    name: '',
    email: '',
    password: ''
};

const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.<>]).{8,16}$/;

const formValidations = {
    name: [(value) => value.length > 0, 'El nombre es obligatorio'],
    email: [(value) => regexEmail.test(value), 'Introduzca un correo electrónico válido'],
    password: [(value) => regexPassword.test(value), 'La contraseña debe tener entre 8 y 16 caracteres y al menos un dígito, una minúscula, una mayúscula y un caracter no alfanumérico (#?!@$%^&*-.<>).']
}

export const RegisterPage = () => {

    const { name, email, password, onInputChange, nameValid, emailValid, passwordValid, isFormValid } = useForm(contactFormFields, formValidations);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSend = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        console.log(name, email, password);
    }

    return (
        <div className='container contact'>
            <form onSubmit={onSend} >
                <div className='row d-flex justify-content-center align-content-center'>
                    <div className='col-8 form-contact'>
                        <div className="mb-3">
                            <h3>Registro</h3>
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
                            <label htmlFor="floatingInput">Contraseña</label>
                            <input
                                type="password"
                                className={`form-control form-field-contact ${(!!passwordValid && formSubmitted) ? 'is-invalid' : ''}`}
                                placeholder="********"
                                name='password'
                                value={password}
                                onChange={onInputChange}
                            />
                            <div className='invalid-feedback'>
                                {passwordValid}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <input
                                type="submit"
                                className="btnSubmit contact-button"
                                value="Crear cuenta" />
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
