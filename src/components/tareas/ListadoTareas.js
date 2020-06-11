import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    const { tareasproyecto, editarTarea, eliminarTarea } = useContext(tareaContext);

    // if (tareasproyecto.length <= 0) return null;
    const cambiarEstado = tarea => {
        tarea.estado = !tarea.estado;
        editarTarea(tarea);
    }

    return (
        <div className="listado-pendientes">
            <ul>
                {tareasproyecto.map(tarea => (
                    <li
                        key={tarea.id}
                        className="tarea"
                    >
                        <p>{tarea.nombre}</p>
                        <div className="acciones">
                            <i
                                className={tarea.estado ? "far fa-check-circle completo" : "far fa-check-circle"}
                                onClick={() => cambiarEstado(tarea)}
                            ></i>
                            <i
                                className="fas fa-trash"
                                onClick={() => eliminarTarea(tarea.id)}
                            ></i>
                        </div>
                    </li>
                ))}
                {tareasproyecto.length <= 0 && <p>No hay tareas en este proyecto, agrega una</p>}
            </ul>
        </div>
    );
}

export default ListadoTareas;