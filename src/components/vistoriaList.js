import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PrintButton from "./print";
import { retrieveVistorias } from "../actions/vistorias";

const VistoriasList = () => {
  const [currentVistoria, setCurrentVistoria] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const vistorias = useSelector((state) => state.vistorias);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveVistorias());
  }, [dispatch]);

  const refreshData = () => {
    setCurrentVistoria(null);
    setCurrentIndex(-1);
  };

  const setActiveVistoria = (vistoria, index) => {
    setCurrentVistoria(vistoria);
    setCurrentIndex(index);
  };

  return (
    <div className="list row h-100">
      <div className="col-md-8"></div>
      <div className="col-md-6">
        <h4>Histórico de Vistorias</h4>

        <ul className="list-group">
          {vistorias &&
            vistorias.map((vistoria, index) => (
              <>
                <li
                  className={
                    "list-group-item my-2" +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveVistoria(vistoria, index)}
                  key={index}
                >
                  id: {vistoria.id}
                </li>
              </>
            ))}
        </ul>
      </div>
      <div className="col-md-6 my-3">
        {currentVistoria ? (
          <div>
            <h4>Vistoria ID: {currentVistoria.id}</h4>

            <div>
              <label>
                <strong>Nome do Condutor</strong>
              </label>{" "}
              {currentVistoria.nome}
              <img
                src={currentVistoria.selfie}
                alt="Selfie do Condutor"
                style={{ maxWidth: "200px" }}
                className="my-2  d-block"
              />
            </div>
            <div>
              <label>
                <strong>Cpf:</strong>
              </label>{" "}
              {currentVistoria.cpf}
              {currentVistoria.selfie.data}
            </div>
            <PrintButton formData={currentVistoria} />
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

export default VistoriasList;
