import React, { useEffect, useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';

const BarraAvance = () => {

    const { tareasproyecto, actualizarAvance } = useContext(tareaContext);

    useEffect(() => {
        actualizarAvance();
        // eslint-disable-next-line
    }, [tareasproyecto])

    return (
        <>
            <div className="avance">
                <h2>Avance del proyecto</h2>
                <div className="barra-avance">
                    <div
                        style={{ width: `${actualizarAvance()}%` }}
                        className="porcentaje"
                    ></div>
                </div>
            </div>
        </>
    );
}

export default BarraAvance;