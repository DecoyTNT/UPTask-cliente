import {
    AGREGAR_TAREA,
    TAREAS_PROYECTO,
    EDITAR_TAREA
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

        default:
            return state;
    }
};