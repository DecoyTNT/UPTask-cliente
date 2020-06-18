import React, { useState, useContext } from 'react';
import usuarioContext from '../../context/usuarios/usuarioContext';

const Reestablecer = () => {

    const [password, setPassword] = useState('');

    const { cambiarPassword } = useContext(usuarioContext);

    const partes = window.location.href.split('/');
    const tokenPassword = partes[partes.length - 1];
    console.log(password);

    const onSubmitForm = e => {
        e.preventDefault();
        if (password.trim() === '') {
            return null;
        }
        cambiarPassword(password, tokenPassword);
    }

    return (
        <div className="login">
            <div className="contenedor-formulario">
                <h1>Recupera tu contraseña</h1>
                <p>Coloca tu nuevo password</p>
                <form
                    onSubmit={onSubmitForm}
                    className="caja-login"
                >
                    <div className="campo">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="text"
                            name="password"
                            placeholder="Coloca tu nuevo password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="campo enviar">
                        <input type="submit" className="boton" value="Reestablecer password" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reestablecer;