import React from "react";

const Rodape = () => {
  return (
    <footer className="bg-dark fixed-bottom text-center text-white py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6>
              Endereço: Rua dr Baeta Neves n° 114 – Baeta Neves - São Bernardo
              do campo - 09784260
            </h6>
            <h6>E-mail: suporte@vistoriago.com.br</h6>
          </div>
          <div className="col-md-6">
            <img
              src={require("../img.png")}
              alt="logo"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
