import React, { useContext } from 'react';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import NuevoProyecto from './NuevoProyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tareas from '../tareas/Tareas';

const Proyectos = () => {

    const { formulario, proyectoseleccionado } = useContext(proyectoContext);
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