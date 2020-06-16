import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usuarioContext from '../../context/usuarios/usuarioContext';

const NuevaCuenta = (props) => {

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    const { errores, redireccionar, autenticado, crearUsuario } = useContext(usuarioContext);

    useEffect(() => {
        if (redireccionar) {
            props.history.push('/');
        }
        if (autenticado) {
            props.history.push('/proyectos');
        }
        // eslint-disable-next-line
    }, [redireccionar, autenticado])

    const onChangeUsuario = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitForm = e => {
        e.preventDefault();
        crearUsuario(usuario);
    }

    return (
        <div className="login">
            {/* {redireccionar && <Redirect to='/' />} */}
            <div className="contenedor-formulario">
                <h1>Crea tu cuenta en UpTask</h1>
                {errores && errores.map(error => (
                    <p
                        className="error alerta"
                        key={error}
                    >{error}</p>
                ))
                }
                <form
                    onSubmit={onSubmitForm}
                    className="caja caja-login"
                >
                    <div className="campo">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Coloca tu email"
                            onChange={onChangeUsuario}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Coloca tu password"
                            onChange={onChangeUsuario}
                        />
                    </div>
                    <div className="campo enviar">
                        <input type="submit" className="boton" value="Crear cuenta" />
                    </div>
                    <div className="campo">
                        <Link to={'/'} >Ya tengo cuenta</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NuevaCuenta;