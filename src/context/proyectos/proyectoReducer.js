import {
    AGREGAR_PROYECTO,
    // OBTENER_PROYECTOS
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [
                    ...state.proyectos,
                    action.payload
                ]
            };

        default:
            return state;
    }
};