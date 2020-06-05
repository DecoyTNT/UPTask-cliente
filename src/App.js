import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Proyectos from './components/proyectos/Proyectos';
import './app.css';
import ProyectoState from './context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/nueva-cuenta" component={NuevaCuenta} /> */}
          <Route exact path="/" component={Proyectos} />
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
