import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import usuarioContext from '../../context/usuarios/usuarioContext';

const Login = (props) => {

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    const { errores, redireccionar, autenticado, loginUsuario } = useContext(usuarioContext);

    useEffect(() => {
        if (autenticado) {
            props.history.push('/proyectos');
        }
        // eslint-disable-next-line
    }, [autenticado])

    const onChangeUsuario = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitForm = e => {
        e.preventDefault();
        loginUsuario(usuario);
    }

    return (
        <div className="login">
            {redireccionar && <Redirect to='/' />}
            <div className="contenedor-formulario">
                <h1>Inicia sesión en UpTask</h1>
                {errores && <p className="error alerta">{errores}</p>}
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
                        <input type="submit" className="boton" value="Iniciar sesión" />
                    </div>
                    <div className="campo">
                        <Link to={'/nueva-cuenta'}>Crear cuenta</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;