import React, { useState, useContext, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    const { mensaje, errorformulario, proyectoseleccionado, agregarProyecto, editarProyecto } = useContext(proyectoContext);

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    useEffect(() => {
        if (proyectoseleccionado) {
            setProyecto({
                nombre: proyectoseleccionado.nombre
            })
        }
    }, [proyectoseleccionado]);

    const { nombre } = proyecto;

    const onSubmitProyecto = e => {
        e.preventDefault();

        // if (nombre.trim() === '') {
        //     return;
        // }

        if (proyectoseleccionado) {
            proyecto.id = proyectoseleccionado.id;
            editarProyecto(proyecto)
        }
        else {
            agregarProyecto(proyecto);
        }


        // proyecto.id = 3;
    }


    return (
        <div className="contenido-principal">

            {proyectoseleccionado ? <h1>Editar Proyecto</h1> : <h1>Nuevo Proyecto</h1>}
            {errorformulario && <div className="alerta error">{mensaje}</div>}

            <form
                className="agregar-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <div className="campo">
                    <label htmlFor="nombre">Nombre del proyecto:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        placeholder="Nombre del proyecto"
                        onChange={e => setProyecto({
                            ...proyecto,
                            [e.target.name]: e.target.value
                        })}
                    />

                </div>
                <div className="campo enviar">
                    {proyectoseleccionado ? <input type="submit" value="Editar" className="boton" />
                        : <input type="submit" value="Agregar" className="boton" />}

                </div>
            </form>

        </div>
    );
}

export default NuevoProyecto;