import {
    AGREGAR_USUARIO,
    LOGIN_EXITOSO,
    ERROR_USUARIO,
    REDIRECCIONAR,
    OBTENER_USUARIO,
    ERROR_AUTENTICADO
} from '../../types';

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
            return {
                ...state,
                errores: action.payload.map(error => error.message),
                redireccionar: false,
                cargando: false
            }

        case REDIRECCIONAR:
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
            return {
                ...state,
                errores: action.payload,
                cargando: false
            }

        default:
            return state;
    }
};