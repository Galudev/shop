import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';

const contactFormFields = {
    email: '',
    password: ''
};

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm(contactFormFields);
    const { startLogin, errorMessage } = useAuthStore();

    const onSend = (event) => {
        event.preventDefault();
        startLogin({ email, password });
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [errorMessage])

    return (
        <div className='container contact'>
            <form onSubmit={onSend} >
                <div className='row d-flex justify-content-center align-content-center'>
                    <div className='col-8 form-contact'>
                        <div className="mb-3">
                            <h3>Inicio de sesión</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Correo electrónico</label>
                            <input
                                type="text"
                                className="form-control form-field-contact"
                                placeholder="nombre@ejemplo.com"
                                name='email'
                                value={email}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floatingInput">Contraseña</label>
                            <input
                                type="password"
                                className="form-control form-field-contact"
                                placeholder="********"
                                name='password'
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <input
                                type="submit"
                                className="btnSubmit contact-button"
                                value="Iniciar sesión" />
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <p>¿No tienes una cuenta? <Link to="/register">Crear cuenta</Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
