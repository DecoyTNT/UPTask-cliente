import {
    AGREGAR_TAREA
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [...state.tareasproyecto, action.payload]
            }

        default:
            return state;
    }
};