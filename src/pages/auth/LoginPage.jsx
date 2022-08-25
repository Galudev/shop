import { Link } from 'react-router-dom';
import { useForm } from '../../hooks'

const contactFormFields = {
    email: '',
    password: ''
};

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm(contactFormFields);

    const onSend = (event) => {
        event.preventDefault();
        console.log(email, password);
    }

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
