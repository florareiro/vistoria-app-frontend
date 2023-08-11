import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTutorial from "./components/addTutorial";
import TutorialsList from "./components/tutorialList";
import Tutorial from "./components/tutorial";
import Rodape from "./components/rodape";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/tutorials" className="navbar-brand">
                <img
                  src={require("./img.png")}
                  alt="logo"
                  width={80}
                  height={80}
                />
              </a>

              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/tutorials"} className="nav-link">
                    Histórico
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Adicionar
                  </Link>
                </li>
              </div>
            </nav>

            <div className="container mt-3">
              <Routes>
                <Route path="/" element={<TutorialsList />} />
                <Route path="/tutorials" element={<TutorialsList />} />
                <Route path="/add" element={<AddTutorial />} />
                <Route path="/tutorials/:id" element={<Tutorial />} />
              </Routes>
            </div>
          </div>
        </Router>
        <Rodape />
      </>
    );
  }
}

export default App;
