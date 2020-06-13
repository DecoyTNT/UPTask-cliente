import {
    AGREGAR_USUARIO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case AGREGAR_USUARIO:
            return {
                ...state,
                redireccionar: true
            }

        default:
            return state;
    }
};