import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header
            className="barra"
        >
            <h1>UpTask - Administrador de proyectos</h1>
            <Link to={'/login'}>Cerrar sesión</Link>
        </header>
    );
}

export default Header;