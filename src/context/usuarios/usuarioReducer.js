import {
    AGREGAR_USUARIO,
    LOGIN_EXITOSO,
    ERROR_USUARIO,
    REDIRECCIONAR,
    OBTENER_USUARIO,
    ERROR_AUTENTICADO,
    CERRAR_SESION
} from '../../types';
import tokenAuth from '../../config/token';

export default (state, action) => {
    switch (action.type) {
        case AGREGAR_USUARIO:
            return {
                ...state,
                redireccionar: true,
                errores: null
            }

        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                redireccionar: false,
                errores: null,
                autenticado: true,
                cargando: false
            }

        case ERROR_USUARIO:
            localStorage.removeItem('token');
            tokenAuth(null);
            return {
                ...state,
                errores: action.payload.map(error => error.message),
                redireccionar: false,
                cargando: false
            }

        case REDIRECCIONAR:
            localStorage.removeItem('token');
            tokenAuth(null);
            return {
                ...state,
                redireccionar: false,
                cargando: false
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }


        case ERROR_AUTENTICADO:
        case CERRAR_SESION:
            localStorage.removeItem('token');
            tokenAuth(null);
            return {
                ...state,
                autenticado: null,
                usuario: null,
                redireccionar: false,
                errores: null,
                cargando: false
            }

        default:
            return state;
    }
};