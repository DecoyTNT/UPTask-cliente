import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import usuarioContext from '../../context/usuarios/usuarioContext';

const Header = () => {
    const { cerrarSesion } = useContext(usuarioContext);
    return (
        <header
            className="barra"
        >
            <h1>UpTask - Administrador de proyectos</h1>
            <Link
                onClick={cerrarSesion}
                to={'/'}
            >Cerrar sesión</Link>
        </header>
    );
}

export default Header;