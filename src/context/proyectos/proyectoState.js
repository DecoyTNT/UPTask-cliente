import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    AGREGAR_PROYECTO,
    // OBTENER_PROYECTOS
} from '../../types';

const ProyectoState = props => {

    const initialState = {
        proyectos: [
            { nombre: 'Diseño de tienda virtual', id: 1 },
            { nombre: 'Diseñar sitio web', id: 2 },
        ]
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const agregarProyecto = async proyecto => {
        try {
            // TODO: completar una vez terminada la parte del backend
            console.log(proyecto);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: proyecto
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;