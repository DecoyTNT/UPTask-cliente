import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import NuevoProyecto from './NuevoProyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tareas from '../tareas/Tareas';
import usuarioContext from '../../context/usuarios/usuarioContext';

const Proyectos = () => {

    const { formulario, proyectoseleccionado } = useContext(proyectoContext);
    const { token, usuarioAutenticado } = useContext(usuarioContext);

    useEffect(() => {
        if (token) {
            usuarioAutenticado();
        }
        // eslint-disable-next-line
    }, []);
    // console.log(proyectoseleccionado);

    return (
        <>
            <Header />
            <main className="contenedor">
                <SideBar />
                {formulario && <NuevoProyecto />}
                {proyectoseleccionado && <Tareas />}
            </main>
        </>
    );
}

export default Proyectos;