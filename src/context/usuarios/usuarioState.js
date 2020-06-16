import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import {
    AGREGAR_USUARIO,
    ERROR_USUARIO,
    LOGIN_EXITOSO,
    OBTENER_USUARIO,
    ERROR_AUTENTICADO
} from '../../types';
import usuarioContext from './usuarioContext';
import usuarioReducer from './usuarioReducer';
import tokenAuth from '../../config/token';

const UsuarioState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        redireccionar: false,
        errores: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const crearUsuario = async usuario => {
        try {
            const resp = await clienteAxios.post('/usuarios', usuario);
            dispatch({
                type: AGREGAR_USUARIO,
                payload: resp.data.usuario
            });
        } catch (error) {
            // console.log(error.response.data.error);
            dispatch({
                type: ERROR_USUARIO,
                payload: error.response.data.error.errors
            });
        }
    }

    const loginUsuario = async usuario => {
        try {
            const resp = await clienteAxios.post('/usuarios/login', usuario);
            // console.log(resp.data);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: resp.data
            });

            usuarioAutenticado();
        } catch (error) {
            console.log(error.response);
        }
    }

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // TODO: Función para enviar el token por headers
            tokenAuth(token);
        }

        try {
            const resp = await clienteAxios.get('/usuarios/auth');

            dispatch({
                type: OBTENER_USUARIO,
                payload: resp.data.usuario
            });

        } catch (error) {
            console.log(error.response.data.msg);
            dispatch({
                type: ERROR_AUTENTICADO,
                payload: error.response.data.msg
            });
        }
    }

    return (
        <usuarioContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                redireccionar: state.redireccionar,
                errores: state.errores,
                cargando: state.cargando,
                crearUsuario,
                loginUsuario,
                usuarioAutenticado
            }}
        >
            {props.children}
        </usuarioContext.Provider>
    );
}

export default UsuarioState;
