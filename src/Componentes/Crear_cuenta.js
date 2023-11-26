import React from "react";
import PropTypes from "prop-types";
import "../Estilos/creasr_cuenta.css";
import { formulario } from "../captureData/crearCuenta.js";

export const CrearCuenta = () => {
  return (
    <div className="crear_cuenta">
      <div className="bgcp">
        <div className="elipse"></div>
        <div className="bgc"></div>
      </div>
      <div className="appgastos">
        APP <br />
        Registro de gastos
      </div>
      <div className="rectangulo2"></div>
      <form>
        <div className="bapp">Bienvenidos a APP registro de gastos </div>
        <div className="input1">
          <div className="line1"></div>
          <input
            type="text"
            className="nombre"
            placeholder="Nombre"
            id="nombre"
            required
          />
        </div>
        <div className="input2">
          <div className="line2"></div>
          <input
            type="text"
            className="apellido"
            placeholder="Apellido"
            id="apellido"
            required
          />
        </div>
        <div className="input3">
          <div className="line3"></div>
          <input
            type="text"
            className="usuario"
            placeholder="Usuario"
            id="usuario"
            required
          />
        </div>
        <div className="input4">
          <div className="line4"></div>
          <input
            type="password"
            className="clave"
            placeholder="Contraseña"
            id="password"
            required
          />
        </div>
        <div className="input5">
          <div className="line5"></div>
          <input
            type="password"
            className="confirmar"
            placeholder="Comfirmar Contraseña"
            id="confirmar"
            required
          />
        </div>
        <div className="input6">
          <div className="line6"></div>
          <input
            type="text"
            className="celular"
            id="celular"
            placeholder="Celular"
          />
        </div>
        <div className="btnc">
          <button type="sumit" onClick={formulario} className="rectangulo1c">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

CrearCuenta.propTypes = {};
