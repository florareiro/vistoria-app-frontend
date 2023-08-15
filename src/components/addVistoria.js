import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ImageUpload from "./imageUpload";
import { createVistoria } from "../actions/vistorias";

const AddVistoria = () => {
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
    veiculo: {
      placa: "",
      chassi: "",
      renavam: "",
      uf: "",
      marca: "",
      modelo: "",
      km: "",
      nivel_combustivel: "",
    },
    fotos_veiculo: {
      foto_placa: "",
      foto_dianteira: "",
      foto_traseira: "",
      foto_hodometro: "",
      foto_banco: "",
    },
  };
  const [vistoria, setVistoria] = useState(initialVistoriaState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [category, field] = name.split(".");

    setVistoria((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value,
      },
    }));
  };

  const saveVistoria = () => {
    const vistoriaData = {
      condutor: vistoria.condutor,
      veiculo: vistoria.veiculo,
      fotos_veiculo: vistoria.fotos_veiculo,
    };

    dispatch(createVistoria(vistoriaData))
      .then((data) => {
        console.log("Data from createVistoria:", data);
        setVistoria(data);
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newVistoria = () => {
    setVistoria(initialVistoriaState);
    setSubmitted(false);
  };

  const handleImageUpload = (fieldName, imageData) => {
    // Use o FileReader para ler a imagem como uma string
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageBase64 = event.target.result;
      setVistoria((prevState) => ({
        ...prevState,
        condutor: {
          ...prevState.condutor,
          [fieldName]: imageBase64,
        },
        fotos_veiculo: {
          ...prevState.fotos_veiculo,
          [fieldName]: imageBase64,
        },
      }));
    };
    reader.readAsDataURL(imageData);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Documento criado com sucesso!</h4>
          <button className="btn btn-success" onClick={newVistoria}>
            Add
          </button>
        </div>
      ) : (
        <div className="mb-5">
          <div className="form-group">
            <h2>Dados do condutor</h2>
            <label htmlFor="condutor.nome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="condutor.nome"
              required
              value={vistoria.condutor ? vistoria.condutor.nome : ""}
              onChange={handleInputChange}
              name="condutor.nome"
            />
            <label htmlFor="condutor.cpf">CPF</label>
            <input
              type="number"
              className="form-control"
              id="condutor.cpf"
              required
              value={vistoria.condutor ? vistoria.condutor.cpf : ""}
              onChange={handleInputChange}
              name="condutor.cpf"
            />
            <label htmlFor="condutor.rg">RG</label>
            <input
              type="number"
              className="form-control"
              id="condutor.rg"
              required
              value={vistoria.condutor ? vistoria.condutor.rg : ""}
              onChange={handleInputChange}
              name="condutor.rg"
            />
            <label htmlFor="condutor.telefone">Telefone</label>
            <input
              type="number"
              className="form-control"
              id="condutor.telefone"
              required
              value={vistoria.condutor ? vistoria.condutor.telefone : ""}
              onChange={handleInputChange}
              name="condutor.telefone"
            />
            <label htmlFor="condutor.endereco">Endereço</label>
            <input
              type="text"
              className="form-control"
              id="condutor.endereco"
              required
              value={vistoria.condutor ? vistoria.condutor.endereco : ""}
              onChange={handleInputChange}
              name="condutor.endereco"
            />
            <label htmlFor="condutor.cnh">CNH</label>
            <input
              type="number"
              className="form-control"
              id="condutor.cnh"
              required
              value={vistoria.condutor ? vistoria.condutor.cnh : ""}
              onChange={handleInputChange}
              name="condutor.cnh"
            />
            <label htmlFor="condutor.selfie" className="my-2">
              Selfie do motorista
            </label>

            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("selfie", imageData)
              }
            />
          </div>
          <div className="form-group mt-5">
            <h2>Dados do veiculo</h2>
            <label htmlFor="veiculo.placa">Placa</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.placa"
              required
              value={vistoria.veiculo ? vistoria.veiculo.placa : ""}
              onChange={handleInputChange}
              name="veiculo.placa"
            />
            <label htmlFor="veiculo.chassi">Chassi</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.chassi"
              required
              value={vistoria.veiculo ? vistoria.veiculo.chassi : ""}
              onChange={handleInputChange}
              name="veiculo.chassi"
            />
            <label htmlFor="veiculo.renavam">Renavam</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.renavam"
              required
              value={vistoria.veiculo ? vistoria.veiculo.renavam : ""}
              onChange={handleInputChange}
              name="veiculo.renavam"
            />
            <label htmlFor="veiculo.uf">UF</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.uf"
              required
              value={vistoria.veiculo ? vistoria.veiculo.uf : ""}
              onChange={handleInputChange}
              name="veiculo.uf"
            />
            <label htmlFor="veiculo.marca">Marca</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.marca"
              required
              value={vistoria.veiculo ? vistoria.veiculo.marca : ""}
              onChange={handleInputChange}
              name="veiculo.marca"
            />
            <label htmlFor="veiculo.modelo">Modelo</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.modelo"
              required
              value={vistoria.veiculo ? vistoria.veiculo.modelo : ""}
              onChange={handleInputChange}
              name="veiculo.modelo"
            />
            <label htmlFor="veiculo.km">Km</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.km"
              required
              value={vistoria.veiculo ? vistoria.veiculo.km : ""}
              onChange={handleInputChange}
              name="veiculo.km"
            />
            <label htmlFor="veiculo.nivel_combustivel">
              Nivel de combustivel
            </label>
            <input
              type="text"
              className="form-control"
              id="veiculo.nivel_combustivel"
              required
              value={vistoria.veiculo ? vistoria.veiculo.nivel_combustivel : ""}
              onChange={handleInputChange}
              name="veiculo.nivel_combustivel"
            />
          </div>
          <div className="form-group my-3">
            <h2>Fotos do veículo</h2>
            <label htmlFor="fotos_veiculo.foto_placa" className="my-2">
              Placa
            </label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_placa", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_dianteira" className="my-2">
              Dianteira
            </label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_dianteira", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_traseira" className="my-2">
              Traseira
            </label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_traseira", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_hodometro" className="my-2">
              Hodometro
            </label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_hodometro", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_banco" className="my-2">
              Banco Dianteira
            </label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_banco", imageData)
              }
            />
          </div>

          {/* Other input fields for driver information, vehicle information, and vehicle photos */}

          <button onClick={saveVistoria} className="btn btn-success  mb-5">
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddVistoria;
