import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const SideBar = () => {

    const { proyectos, obtenerProyectos, obtenerProyectoId, mostrarFormulario } = useContext(proyectoContext);
    const { obtenerTareasProyecto } = useContext(tareaContext);

    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    // console.log(proyectos)

    const onclickProyecto = proyectoId => {
        obtenerProyectoId(proyectoId);
        obtenerTareasProyecto(proyectoId);
    }

    return (
        <aside
            className="contenedor-proyectos"
        >
            <div
                className="panel crear-proyecto"
            >
                <button
                    type="button"
                    className="boton"
                    onClick={mostrarFormulario}
                >Nuevo Proyecto<span>+</span></button>
            </div>
            <div className="panel lista-proyectos">
                <h2>Proyectos</h2>
                <ul id="proyectos" className="proyectos">
                    {proyectos.map(project => (
                        <li key={project.id} >
                            <button
                                className="btn-lista-proyectos"
                                onClick={() => onclickProyecto(project.id)}
                            >
                                {project.nombre}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;