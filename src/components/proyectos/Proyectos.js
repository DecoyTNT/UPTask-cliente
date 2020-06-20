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

    return (
        <>
            <Header />
            <div className="contenedor-app">
                <main className="contenedor">
                    <SideBar />
                    <div className="seccion-principal">
                        {formulario && <NuevoProyecto />}
                        {proyectoseleccionado && <Tareas />}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Proyectos;