import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tareas = () => {

    const { proyectoseleccionado, editar, mostrarEditar, eliminarProyecto } = useContext(proyectoContext);
    if (editar) return null;

    const onClickEliminar = () => {
        Swal.fire({
            title: 'Quieres eliminar este proyecto',
            text: "Una vez eliminado no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                eliminarProyecto(proyectoseleccionado.id);
                Swal.fire(
                    'Proyecto Eliminado',
                    'Tu proyecto ha sido eliminado',
                    'success'
                );
            }
        }).catch(() => {
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'No se pudo eliminar el proyecto'
            });
        })
    }

    return (
        <>
            <div className="contenido-principal">
                <h1>{proyectoseleccionado.nombre}</h1>
                {/* TODO: Formulario aquí */}

                {/* TODO: Listado de tareas */}

                {/* TODO: Acciones que se pueden realizar */}
                <div className="contenedor-acciones">
                    <button
                        type="button"
                        className="boton"
                        onClick={mostrarEditar}
                    >Editar Proyecto</button>
                    <button
                        type="button"
                        className="boton eliminar"
                        id="eliminar-proyecto"
                        onClick={onClickEliminar}
                    >Eliminar Proyecto</button>
                </div>
            </div>
        </>
    );
}

export default Tareas;