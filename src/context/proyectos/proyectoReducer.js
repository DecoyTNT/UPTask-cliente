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

export default (state, action) => {
    switch (action.type) {

        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true,
                proyectoseleccionado: null,
                mensaje: null
            }

        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload,
                mensaje: null
            }

        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [
                    ...state.proyectos,
                    action.payload
                ],
                formulario: false,
                errorformulario: false,
                editar: false,
                mensaje: null
            };

        case PROYECTO_ERROR:
            return {
                ...state,
                errorformulario: true,
                mensaje: action.payload
            }

        case SELECCIONAR_PROYECTO:
            return {
                ...state,
                proyectoseleccionado: action.payload,
                formulario: false,
                editar: false,
                mensaje: null
            }

        case MOSTRAR_EDITAR_PROYECTO:
            return {
                ...state,
                editar: true,
                formulario: true,
                errorformulario: false,
                mensaje: null
            }

        case EDITAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.map(proyecto => proyecto.id === action.payload.id ? action.payload : proyecto),
                editar: false,
                formulario: false,
                proyectoseleccionado: action.payload,
                errorformulario: false,
                mensaje: null
            }

        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectoseleccionado: null,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                mensaje: null
            }

        default:
            return state;
    }
};