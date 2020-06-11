import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
    AGREGAR_TAREA,
    TAREAS_PROYECTO,
    EDITAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const agregarTarea = async tarea => {
        try {
            const resp = await clienteAxios.post(`/tareas`, tarea);
            console.log(resp.data.tarea);
            dispatch({
                type: AGREGAR_TAREA,
                payload: resp.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerTareasProyecto = async proyectoId => {
        try {
            const resp = await clienteAxios.get(`/tareas/proyecto/${proyectoId}`);
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resp.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    const editarTarea = async tarea => {
        try {
            const resp = await clienteAxios.put(`/tareas/${tarea.id}`, tarea);
            // console.log(resp.data.tarea);
            dispatch({
                type: EDITAR_TAREA,
                payload: resp.data.tarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <tareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                agregarTarea,
                obtenerTareasProyecto,
                editarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    );
}

export default TareaState;