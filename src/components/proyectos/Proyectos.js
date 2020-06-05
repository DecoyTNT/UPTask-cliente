import React from 'react';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import NuevoProyecto from './NuevoProyecto';

const Proyectos = () => {
    return (
        <>
            <Header />
            <main className="contenedor">
                <SideBar />
                <NuevoProyecto />
            </main>
        </>
    );
}

export default Proyectos;