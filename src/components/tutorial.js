import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTutorial, deleteTutorial } from "../actions/tutorials";
import TutorialDataService from "../services/tutorial.service";

const Tutorial = (props) => {
  const initialTutorialState = {
    id: null,
    condutor: {
      nome: "",
      cpf: "",
      rg: "",
      telefone: "",
      endereco: "",
      cnh: "",
      selfie: "",
    },
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getTutorial = (id) => {
    TutorialDataService.get(id)
      .then((response) => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Vistoria</h4>
          <form>
            <div className="form-group">
              <h2>Dados do condutor</h2>
              <label htmlFor="condutor.nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="condutor.nome"
                name="condutor.nome"
                value={currentTutorial.condutor.nome}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.nome">CPF</label>
              <input
                type="number"
                className="form-control"
                id="condutor.cpf"
                name="condutor.cpf"
                value={currentTutorial.condutor.cpf}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.rg">RG</label>
              <input
                type="number"
                className="form-control"
                id="condutor.rg"
                name="condutor.rg"
                value={currentTutorial.condutor.rg}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.telefone">Telefone</label>
              <input
                type="number"
                className="form-control"
                id="condutor.telefone"
                name="condutor.telefone"
                value={currentTutorial.condutor.telefone}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.endereco">Endereço</label>
              <input
                type="number"
                className="form-control"
                id="condutor.endereco"
                name="condutor.endereco"
                value={currentTutorial.condutor.endereco}
                onChange={handleInputChange}
              />

              <label htmlFor="condutor.cnh">CNH</label>
              <input
                type="number"
                className="form-control"
                id="condutor.cnh"
                name="condutor.cnh"
                value={currentTutorial.condutor.cnh}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.selfie">selfie</label>

              <input
                type="number"
                className="form-control"
                id="condutor.selfie"
                name="condutor.selfie"
                value={currentTutorial.condutor.selfie}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="form-group">
              <h2>Dados do Veículo</h2>
              <label htmlFor="description">Placa</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div> */}
            {/* 
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div> */}
          </form>

          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Por favor clique em uma vistoria...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
