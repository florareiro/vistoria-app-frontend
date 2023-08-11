import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTutorial } from "../actions/tutorials";
import ImageUpload from "./imageUpload";

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
  const [tutorial, setTutorial] = useState(initialVistoriaState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [category, field] = name.split(".");

    setTutorial((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value,
      },
    }));
  };

  const saveTutorial = () => {
    const tutorialData = {
      condutor: tutorial.condutor,
      veiculo: tutorial.veiculo,
      fotos_veiculo: tutorial.fotos_veiculo,
    };

    dispatch(createTutorial(tutorialData))
      .then((data) => {
        console.log("Data from createTutorial:", data);
        setTutorial(data);
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialVistoriaState);
    setSubmitted(false);
  };

  const handleImageUpload = (fieldName, imageData) => {
    // Use o FileReader para ler a imagem como uma string
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageBase64 = event.target.result;
      setTutorial((prevState) => ({
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
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <h2>Dados do condutor</h2>
            <label htmlFor="condutor.nome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="condutor.nome"
              required
              value={tutorial.condutor ? tutorial.condutor.nome : ""}
              onChange={handleInputChange}
              name="condutor.nome"
            />
            <label htmlFor="condutor.cpf">CPF</label>
            <input
              type="number"
              className="form-control"
              id="condutor.cpf"
              required
              value={tutorial.condutor ? tutorial.condutor.cpf : ""}
              onChange={handleInputChange}
              name="condutor.cpf"
            />
            <label htmlFor="condutor.rg">RG</label>
            <input
              type="number"
              className="form-control"
              id="condutor.rg"
              required
              value={tutorial.condutor ? tutorial.condutor.rg : ""}
              onChange={handleInputChange}
              name="condutor.rg"
            />
            <label htmlFor="condutor.telefone">Telefone</label>
            <input
              type="number"
              className="form-control"
              id="condutor.telefone"
              required
              value={tutorial.condutor ? tutorial.condutor.telefone : ""}
              onChange={handleInputChange}
              name="condutor.telefone"
            />
            <label htmlFor="condutor.endereco">Endereço</label>
            <input
              type="text"
              className="form-control"
              id="condutor.endereco"
              required
              value={tutorial.condutor ? tutorial.condutor.endereco : ""}
              onChange={handleInputChange}
              name="condutor.endereco"
            />
            <label htmlFor="condutor.cnh">CNH</label>
            <input
              type="number"
              className="form-control"
              id="condutor.cnh"
              required
              value={tutorial.condutor ? tutorial.condutor.cnh : ""}
              onChange={handleInputChange}
              name="condutor.cnh"
            />
            <label htmlFor="condutor.selfie">selfie</label>
            {/* <input
              type="text"
              className="form-control"
              id="condutor.selfie"
              required
              value={tutorial.condutor ? tutorial.condutor.selfie : ""}
              onChange={handleInputChange}
              name="condutor.selfie"
            /> */}
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("selfie", imageData)
              }
            />
          </div>
          <div className="form-group">
            <h2>Dados do veiculo</h2>
            <label htmlFor="veiculo.placa">Placa</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.placa"
              required
              value={tutorial.veiculo ? tutorial.veiculo.placa : ""}
              onChange={handleInputChange}
              name="veiculo.placa"
            />
            <label htmlFor="veiculo.chassi">Chassi</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.chassi"
              required
              value={tutorial.veiculo ? tutorial.veiculo.chassi : ""}
              onChange={handleInputChange}
              name="veiculo.chassi"
            />
            <label htmlFor="veiculo.renavam">Renavam</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.renavam"
              required
              value={tutorial.veiculo ? tutorial.veiculo.renavam : ""}
              onChange={handleInputChange}
              name="veiculo.renavam"
            />
            <label htmlFor="veiculo.uf">UF</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.uf"
              required
              value={tutorial.veiculo ? tutorial.veiculo.uf : ""}
              onChange={handleInputChange}
              name="veiculo.uf"
            />
            <label htmlFor="veiculo.marca">Marca</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.marca"
              required
              value={tutorial.veiculo ? tutorial.veiculo.marca : ""}
              onChange={handleInputChange}
              name="veiculo.marca"
            />
            <label htmlFor="veiculo.modelo">Modelo</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.modelo"
              required
              value={tutorial.veiculo ? tutorial.veiculo.modelo : ""}
              onChange={handleInputChange}
              name="veiculo.modelo"
            />
            <label htmlFor="veiculo.km">Km</label>
            <input
              type="text"
              className="form-control"
              id="veiculo.km"
              required
              value={tutorial.veiculo ? tutorial.veiculo.km : ""}
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
              value={tutorial.veiculo ? tutorial.veiculo.nivel_combustivel : ""}
              onChange={handleInputChange}
              name="veiculo.nivel_combustivel"
            />
          </div>
          <div className="form-group">
            <h2>Fotos do veículo</h2>
            <label htmlFor="fotos_veiculo.foto_placa">Placa</label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_placa", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_dianteira">Dianteira</label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_dianteira", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_traseira">Traseira</label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_traseira", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_hodometro">Hodometro</label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_hodometro", imageData)
              }
            />

            <label htmlFor="fotos_veiculo.foto_banco">Banco Dianteira</label>
            <ImageUpload
              onImageSelected={(imageData) =>
                handleImageUpload("foto_banco", imageData)
              }
            />
          </div>

          {/* Other input fields for driver information, vehicle information, and vehicle photos */}

          <button onClick={saveTutorial} className="btn btn-success mt-2">
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddVistoria;
