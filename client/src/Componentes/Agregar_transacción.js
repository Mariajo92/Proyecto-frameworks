import React from "react";
import PropTypes from "prop-types";
import "../Estilos/Agregar_transaccion.css";

export const AgregarTransaccion = () => {
  return (
    <div className="agregartransaccion">
      <div className="rectanguloagr2"></div>
      <div className="appagr">
        APP <br />
        Registro de gastos
      </div>
      <div className="agregartrn">Agregar transacciones</div>
      <div className="numid">número id</div>
      <div className="nomtran">Nombre de transacción </div>
      <div className="valortran">Valor transferencia </div>
      <div className="categoriatrn">Categoria </div>
      <div className="infotran">Información adicional</div>
      <div className="componentran">
        <div className="autotrans">
          <div className="vectortran"></div>
        </div>
      </div>
      <div className="tran1"></div>
      <div className="tran2"></div>
      <div className="tran3"></div>
      <div className="tran4"></div>
      <div className="tran5"></div>
      <div className="btntran">
        <div className="rectangulotran"></div>
        <div className="agrgartran">Agregar</div>
      </div>
      <div className="frametran">
        <div className="imagetran"></div>
      </div>
    </div>
  );
};

AgregarTransaccion.propTypes = {};
