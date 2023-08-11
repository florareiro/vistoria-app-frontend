import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { retrieveTutorials } from "../actions/tutorials";
import PrintButton from "./print";

const TutorialsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const tutorials = useSelector((state) => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, [dispatch]);

  const refreshData = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-8"></div>
      <div className="col-md-6">
        <h4>Histórico de Vistorias</h4>

        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <>
                <li
                  className={
                    "list-group-item my-2" +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  id: {tutorial.id}
                </li>
              </>
            ))}
        </ul>
      </div>
      <div className="col-md-6 my-3">
        {currentTutorial ? (
          <div>
            <h4>Vistoria ID: {currentTutorial.id}</h4>

            <div>
              <label>
                <strong>Nome do Condutor</strong>
              </label>{" "}
              {currentTutorial.nome}
              <img
                src={currentTutorial.selfie}
                alt="Selfie do Condutor"
                style={{ maxWidth: "200px" }}
                className="my-2  d-block"
              />
            </div>
            <div>
              <label>
                <strong>Cpf:</strong>
              </label>{" "}
              {currentTutorial.cpf}
              {currentTutorial.selfie.data}
            </div>
            <PrintButton formData={currentTutorial} />
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor clique em uma vistoria...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsList;
