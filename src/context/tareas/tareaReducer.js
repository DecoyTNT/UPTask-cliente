import {
    AGREGAR_TAREA,
    TAREAS_PROYECTO,
    EDITAR_TAREA,
    ELIMINAR_TAREA
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [...state.tareasproyecto, action.payload]
            }

        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: action.payload
            }

        case EDITAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.filter(tarea => tarea.id !== action.payload)
            }

        default:
            return state;
    }
};