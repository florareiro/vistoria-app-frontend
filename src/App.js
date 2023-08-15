import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddVistoria from "./components/addVistoria";
import VistoriasList from "./components/vistoriaList";
import Vistoria from "./components/vistoria";
import Rodape from "./components/rodape";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark d-flex sticky-top justify-content-between">
              <div className="mx-5">
                {" "}
                <a href="/vistorias" className="navbar-brand ml-5">
                  <img
                    src={require("./img.png")}
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </a>
              </div>

              <div className="navbar-nav mr-auto d-flex justify-content-between ">
                <li className="nav-item mx-5">
                  <Link to={"/vistorias"} className="nav-link">
                    Histórico
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link mx-5">
                    Adicionar
                  </Link>
                </li>
              </div>
            </nav>

            <div className="container mt-5">
              <Routes>
                <Route path="/" element={<VistoriasList />} />
                <Route path="/vistorias" element={<VistoriasList />} />
                <Route path="/add" element={<AddVistoria />} />
                <Route path="/vistorias/:id" element={<Vistoria />} />
              </Routes>
            </div>
            <Rodape />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
