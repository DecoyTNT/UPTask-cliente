import React, { useContext, useEffect } from 'react';
import usuarioContext from '../../context/usuarios/usuarioContext';
import { Route, Redirect } from 'react-router-dom';

const RutaPrivada = ({ component: Component, ...props }) => {

    const { autenticado, cargando, usuarioAutenticado } = useContext(usuarioContext);

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (
        <Route {...props} render={props => !autenticado && !cargando ? (
            <Redirect to="/" />
        ) : (
                <Component {...props} />
            )}
        />
    );
}

export default RutaPrivada;