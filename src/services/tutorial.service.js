import http from "../http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const create = (data) => {
  const tutorial = {
    condutor: {
      nome: data.condutor.nome,
      cpf: data.condutor.cpf,
      rg: data.condutor.rg,
      telefone: data.condutor.telefone,
      endereco: data.condutor.endereco,
      cnh: data.condutor.cnh,
      selfie: data.condutor.selfie,
    },
    veiculo: {
      placa: data.veiculo.placa,
      chassi: data.veiculo.chassi,
      renavam: data.veiculo.renavam,
      uf: data.veiculo.uf,
      marca: data.veiculo.marca,
      modelo: data.veiculo.modelo,
      km: data.veiculo.km,
      nivel_combustivel: data.veiculo.nivel_combustivel,
    },
    fotos_veiculo: {
      foto_placa: data.fotos_veiculo.foto_placa,
      foto_dianteira: data.fotos_veiculo.foto_dianteira,
      foto_traseira: data.fotos_veiculo.foto_traseira,
      foto_hodometro: data.fotos_veiculo.foto_hodometro,
      foto_banco: data.fotos_veiculo.foto_banco,
    },
  };

  return http.post("/tutorials", JSON.stringify(tutorial));
};

const TutorialService = {
  getAll,

  create,
};

export default TutorialService;
