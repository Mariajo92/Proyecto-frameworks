import React from "react";
import "../Estilos/creasr_cuenta.css";

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
      <div className="bapp">Bienvenidos a APP registro de gastos </div>
      <div className="input1">
        <div className="line1"></div>
        <div className="nombre">Nombre</div>
      </div>
      <div className="input2">
        <div className="line2"></div>
        <div className="apellido">Apellido</div>
      </div>
      <div className="input3">
        <div className="line3"></div>
        <div className="correo">Correo </div>
      </div>
      <div className="input4">
        <div className="line4"></div>
        <div className="password">Password</div>
      </div>
      <div className="input5">
        <div className="line5"></div>
        <div className="confirmarpass">Confirmar Password</div>
      </div>
      <div className="input6">
        <div className="line6"></div>
        <div className="celular">Celular</div>
      </div>
      <div className="btnc">
        <div className="rectangulo1c"></div>
        <div className="crear">Crear</div>
      </div>
    </div>
  );
};
