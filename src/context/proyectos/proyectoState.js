import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    AGREGAR_PROYECTO,
    OBTENER_PROYECTOS,
    PROYECTO_ERROR,
    SELECCIONAR_PROYECTO,
    MOSTRAR_EDITAR_PROYECTO,
    EDITAR_PROYECTO,
    ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props => {

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyectoseleccionado: null,
        editar: false,
        mensaje: null
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = async () => {
        try {
            const resp = await clienteAxios.get('/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resp.data.proyectos
            })
        } catch (error) {
            console.log({ error });
        }
    }

    const obtenerProyectoId = async id => {
        try {
            const resp = await clienteAxios.get(`/proyectos/${id}`);
            dispatch({
                type: SELECCIONAR_PROYECTO,
                payload: resp.data.proyecto
            })
        } catch (error) {
            console.log({ error });
        }
    }

    const mostrarEditar = () => {
        dispatch({
            type: MOSTRAR_EDITAR_PROYECTO
        })
    }

    const editarProyecto = async proyecto => {
        try {
            const resp = await clienteAxios.put(`/proyectos/${proyecto.id}`, proyecto);
            dispatch({
                type: EDITAR_PROYECTO,
                payload: resp.data.proyecto
            })
        } catch (error) {
            console.log({ error });
            if (error.response.data.errors.nombre.msg) {
                dispatch({
                    type: PROYECTO_ERROR,
                    payload: error.response.data.errors.nombre.msg
                });
            };
        }
    }

    const eliminarProyecto = async id => {
        try {
            await clienteAxios.delete(`/proyectos/${id}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: id
            })
        } catch (error) {
            console.log({ error });
        }
    }

    const agregarProyecto = async proyecto => {
        try {
            const resp = await clienteAxios.post('/proyectos', proyecto);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resp.data.proyecto
            })
        } catch (error) {
            console.log({ error });
            if (error.response.data.errors.nombre.msg) {
                dispatch({
                    type: PROYECTO_ERROR,
                    payload: error.response.data.errors.nombre.msg
                });
            };
        }
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                errorformulario: state.errorformulario,
                formulario: state.formulario,
                proyectoseleccionado: state.proyectoseleccionado,
                editar: state.editar,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                obtenerProyectoId,
                agregarProyecto,
                mostrarEditar,
                editarProyecto,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;