import React from "react";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <div className="ml-5">
          <img
            src={require("./logovist.jpg")}
            alt="Cabeçalho"
            width={200}
            height={100}
            className="mx-auto"
          />

          <p>Data de emissão: {this.props.formData.createdAt}</p>
          <p>Nº de identificação: {this.props.formData.id}</p>
          {/* Renderize os dados do formulário aqui */}
          <h2>Dados Motorista</h2>
          <p>Nome: {this.props.formData.nome}</p>
          <p>CPF: {this.props.formData.cpf}</p>
          <p>Telefone: {this.props.formData.telefone}</p>
          <p>Endereço: {this.props.formData.endereco}</p>
          <p>CNH: {this.props.formData.cnh}</p>
          <p>
            Selfie do motorista:{" "}
            <img
              src={this.props.formData.selfie}
              alt="Selfie"
              width={100}
              height={50}
            />
          </p>

          <h2>Dados do Veículo</h2>
          <p>Placa: {this.props.formData.placa}</p>
          <p>Chassi: {this.props.formData.chassi}</p>
          <p>Renavam: {this.props.formData.renavam}</p>
          <p>UF: {this.props.formData.uf}</p>
          <p>Marca: {this.props.formData.marca}</p>
          <p>Modelo: {this.props.formData.modelo}</p>
          <p>Km: {this.props.formData.km}</p>
          <p>Nível do combustível: {this.props.formData.nivel_combustivel}</p>
          {/* ... outros campos do formulário ... */}

          <h2>Fotos do veículo</h2>
          <p>
            Placa:{" "}
            <img
              src={this.props.formData.foto_placa}
              alt="Selfie"
              width={100}
              height={50}
            />
          </p>
          <p>
            Dianteira:{" "}
            <img
              src={this.props.formData.foto_dianteira}
              alt="Selfie"
              width={100}
              height={50}
            />
          </p>
          <p>
            Traseira:{" "}
            <img
              src={this.props.formData.foto_traseira}
              alt="Selfie"
              width={100}
              height={50}
            />
          </p>
          <p>
            Traseira:{" "}
            <img
              src={this.props.formData.foto_hodometro}
              alt="Selfie"
              width={100}
              height={50}
            />
          </p>
          <p>
            Banco Dianteiro:{" "}
            <img
              src={this.props.formData.foto_banco}
              alt="Selfie"
              width={100}
              height={50}
            />
          </p>
        </div>
      </>
    );
  }
}

const PrintButton = ({ formData }) => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button className="btn btn-primary mt-5" onClick={handlePrint}>
        Imprimir
      </button>
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} formData={formData} />
      </div>
    </div>
  );
};

export default PrintButton;
