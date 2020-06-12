import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import Swal from 'sweetalert2';

const ListadoTareas = () => {

    const { tareasproyecto, editarTarea, eliminarTarea } = useContext(tareaContext);

    // if (tareasproyecto.length <= 0) return null;
    const cambiarEstado = tarea => {
        tarea.estado = !tarea.estado;
        editarTarea(tarea);
    }

    const onClickEliminar = id => {
        Swal.fire({
            title: 'Quieres eliminar esta tarea',
            text: "Una vez eliminada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                eliminarTarea(id);
                Swal.fire(
                    'Tarea Eliminada',
                    'La tarea fue eliminada',
                    'success'
                );
            }
        }).catch(() => {
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'No se pudo eliminar la tarea'
            });
        })
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
                                onClick={() => onClickEliminar(tarea.id)}
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