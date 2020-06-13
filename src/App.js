import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Proyectos from './components/proyectos/Proyectos';
import './app.css';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import NuevaCuenta from './components/auth/NuevaCuenta';
import UsuarioState from './context/usuarios/usuarioState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <UsuarioState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </UsuarioState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
