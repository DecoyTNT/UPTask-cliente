import React, { useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    const { proyectoseleccionado } = useContext(proyectoContext);
    const { agregarTarea } = useContext(tareaContext);

    const [tarea, setTarea] = useState({
        nombre: '',
        proyectoId: proyectoseleccionado.id
    });

    const { nombre } = tarea;

    const onSubmitTarea = e => {
        e.preventDefault();

        agregarTarea(tarea);
    }

    return (
        <form
            className="agregar-tarea"
            onSubmit={onSubmitTarea}
        >
            <div className="campo">
                <label htmlFor="tarea">Tarea:</label>
                <input
                    className="nombre-tarea"
                    type="text"
                    name="nombre"
                    placeholder="Nombre de la tarea"
                    value={nombre}
                    onChange={e => setTarea({
                        ...tarea,
                        [e.target.name]: e.target.value
                    })}
                />
            </div>
            <div className="campo enviar">
                <input type="submit" className="boton nueva-tarea" value="Agregar" />
            </div>
        </form>
    );
}

export default FormTarea;