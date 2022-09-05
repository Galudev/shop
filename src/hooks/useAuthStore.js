import { useDispatch, useSelector } from "react-redux"
import { shopApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import { useShoppingBasketStore } from "./";

export const useAuthStore = () => {

    const { isLogged, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { startLoadingList } = useShoppingBasketStore();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking);

        try {
            const { data } = await shopApi.post('/auth', { email, password });
            const { user } = data;
            localStorage.setItem('token', data.token);
            startLoadingList(user.basketList);
            dispatch(onLogin({ name: user.name, email: user.email }));
        } catch (error) {
            console.log(error);
            const message = error.response.data.message
            dispatch(onLogout(message));
            setTimeout(() => {
                clearErrorMessage();
            }, 10)
        }
    }

    const startRegister = async ({ name, email, password }) => {

        dispatch(onChecking);

        try {
            const { data } = await shopApi.post('/auth/new', { name, email, password });
            localStorage.setItem('token', data.token);
            startLoadingList([]);
            dispatch(onLogin({ name, email }));
        } catch (error) {
            console.log(error);
            const message = error.response.data.message
            dispatch(onLogout(message));
            setTimeout(() => {
                clearErrorMessage();
            }, 10)
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await shopApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            dispatch(onLogin({ name: data.name, email: data.email }));
        } catch (error) {
            console.log(error);
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        startLoadingList([]);
        dispatch(onLogout());
    }

    return {
        errorMessage,
        isLogged,
        user,

        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}