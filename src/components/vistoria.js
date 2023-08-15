import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import VistoriaService from "../services/vistoria.service";

const Vistoria = (props) => {
  const initialVistoriaState = {
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
  const [currentVistoria, setCurrentVistoria] = useState(initialVistoriaState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getVistoria = (id) => {
    VistoriaService.get(id)
      .then((response) => {
        setCurrentVistoria(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getVistoria(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentVistoria({ ...currentVistoria, [name]: value });
  };

  return (
    <div>
      {currentVistoria ? (
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
                value={currentVistoria.condutor.nome}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.nome">CPF</label>
              <input
                type="number"
                className="form-control"
                id="condutor.cpf"
                name="condutor.cpf"
                value={currentVistoria.condutor.cpf}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.rg">RG</label>
              <input
                type="number"
                className="form-control"
                id="condutor.rg"
                name="condutor.rg"
                value={currentVistoria.condutor.rg}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.telefone">Telefone</label>
              <input
                type="number"
                className="form-control"
                id="condutor.telefone"
                name="condutor.telefone"
                value={currentVistoria.condutor.telefone}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.endereco">Endereço</label>
              <input
                type="number"
                className="form-control"
                id="condutor.endereco"
                name="condutor.endereco"
                value={currentVistoria.condutor.endereco}
                onChange={handleInputChange}
              />

              <label htmlFor="condutor.cnh">CNH</label>
              <input
                type="number"
                className="form-control"
                id="condutor.cnh"
                name="condutor.cnh"
                value={currentVistoria.condutor.cnh}
                onChange={handleInputChange}
              />
              <label htmlFor="condutor.selfie">selfie</label>

              <input
                type="number"
                className="form-control"
                id="condutor.selfie"
                name="condutor.selfie"
                value={currentVistoria.condutor.selfie}
                onChange={handleInputChange}
              />
            </div>
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

export default Vistoria;
