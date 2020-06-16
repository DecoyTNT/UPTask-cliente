import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Proyectos from './components/proyectos/Proyectos';
import './app.css';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import NuevaCuenta from './components/auth/NuevaCuenta';
import UsuarioState from './context/usuarios/usuarioState';
import tokenAuth from './config/token';
import RutaPrivada from './components/routes/RutaPrivada';

// Se revisa si existe un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <UsuarioState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <RutaPrivada exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </UsuarioState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
