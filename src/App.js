import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import EditarParticipante from "./components/EditarParticipante";
import NovoParticipante from "./components/NovoParticipante";
import ListagemParticipantes from "./components/ListagemParticipantes";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="nav-link">
            <h1 className="navbar-brand">Leilão CRUD Participantes</h1>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/participantes" className="nav-link">
                Participantes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/novo" className="nav-link">
                Novo participante
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/participantes"]} component={ListagemParticipantes} />
          <Route exact path="/novo" component={NovoParticipante} />
          <Route path="/participantes/:id" component={EditarParticipante} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
