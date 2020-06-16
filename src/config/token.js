import clienteAxios from './axios';

const tokenAuth = token => {
    if (token) {
        clienteAxios.defaults.headers.common['token'] = token;
    } else {
        delete clienteAxios.defaults.headers.common['token'];
    }
}

export default tokenAuth;