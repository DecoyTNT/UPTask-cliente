import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import {
    AGREGAR_USUARIO
} from '../../types';
import usuarioContext from './usuarioContext';
import usuarioReducer from './usuarioReducer';

const UsuarioState = props => {
    const initialState = {
        usuario: null,
        redireccionar: false
    }

    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const crearUsuario = async usuario => {
        try {
            const resp = await clienteAxios.post('/usuarios', usuario);
            console.log(resp.data.usuario);
            dispatch({
                type: AGREGAR_USUARIO,
                payload: resp.data.usuario
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <usuarioContext.Provider
            value={{
                usuario: state.usuario,
                redireccionar: state.redireccionar,
                crearUsuario
            }}
        >
            {props.children}
        </usuarioContext.Provider>
    );
}

export default UsuarioState;
