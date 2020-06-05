import React, { useState } from 'react';

const NuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nombre: ''
    })

    const { nombre } = proyecto;

    return (
        <div className="contenido-principal">
            <h1>Nuevo Proyecto</h1>
            <form
                className="agregar-proyecto"
            // onSubmit={agregarNuevoProyecto}
            >
                <div className="campo">
                    <label htmlFor="nombre">Nombre del proyecto:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre del proyecto"
                    />
                </div>
                <div className="campo enviar">
                    <input type="submit" value="Agregar" className="boton" />
                </div>
            </form>
        </div>
    );
}

export default NuevoProyecto;