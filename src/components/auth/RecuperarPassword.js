import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecuperarPassword = () => {

    const [email, setEmail] = useState('');

    return (
        <div className="login">
            <div className="contenedor-formulario">
                <h1>Recupera tu contraseña</h1>
                <p>Agrega tu email para restablecer tu contraseña</p>
                <form
                    className="caja-login"
                >
                    <div className="campo">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Coloca tu email"
                            onChange={texto => setEmail(texto)}
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