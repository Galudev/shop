import axios from 'axios';

// TODO: Añadir variables de entorno
//const VITE_API_URL = 'http://localhost:4000/api'
const VITE_API_URL = 'https://shop-backend-zeku.onrender.com/api'

const shopApi = axios.create({
    baseURL: VITE_API_URL
});

shopApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default shopApi;