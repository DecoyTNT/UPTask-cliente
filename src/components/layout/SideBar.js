import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const SideBar = () => {

    const { proyectos } = useContext(proyectoContext);

    return (
        <aside
            className="contenedor-proyectos"
        >
            <div
                className="panel crear-proyecto"
            >
                <button type="button" className="boton">Nuevo Proyecto<span>+</span></button>
            </div>
            <div className="panel lista-proyectos">
                <h2>Proyectos</h2>
                <ul id="proyectos" className="proyectos">
                    {proyectos.map(project => (
                        <li key={project.id} >{project.nombre}</li>
                    ))}
                    {/* <li>
                        Diseño de tienda virtual
                    </li>
                    <li>
                        Diseñar sitio web
                    </li> */}
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;