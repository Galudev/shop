import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

    const { isLogged, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = ({ email, password }) => {

        dispatch(onChecking);

        const data = JSON.parse(localStorage.getItem('user')) ?? {}

        if (data.email === email && data.password === password) {
            const name = data.name;
            dispatch(onLogin({ name, email }));
        } else {
            dispatch(onLogout("No existe un usuario con ese email y contraseña"));
            setTimeout(() => {
                clearErrorMessage();
            }, 10)
        }
    }

    const startRegister = ({ name, email, password }) => {

        dispatch(onChecking);

        localStorage.setItem('user', JSON.stringify({ name, email, password }));

        dispatch(onLogin({ name, email }));
    }

    const startLogout = () => {
        dispatch(onLogout());
    }

    return {
        errorMessage,
        isLogged,
        user,

        startLogin,
        startRegister,
        startLogout,
    }
}