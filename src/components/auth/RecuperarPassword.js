import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usuarioContext from '../../context/usuarios/usuarioContext';

const RecuperarPassword = (props) => {

    const [email, setEmail] = useState('');

    const { reestablecer, tokenPassword } = useContext(usuarioContext);

    useEffect(() => {
        if (reestablecer) {
            props.history.push('/');
        }
        // eslint-disable-next-line
    }, [reestablecer]);

    const onSubmitForm = e => {
        e.preventDefault();

        tokenPassword(email);
    }

    return (
        <div className="login">
            <div className="contenedor-formulario">
                <h1>Recupera tu contraseña</h1>
                <p>Agrega tu email para restablecer tu contraseña</p>
                <form
                    className="caja-login"
                    onSubmit={onSubmitForm}
                >
                    <div className="campo">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Coloca tu email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="campo enviar">
                        <input type="submit" className="boton" value="Recuperar password" />
                    </div>
                    <div className="campo acciones">
                        <Link to={'/'} >Volver a login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RecuperarPassword;