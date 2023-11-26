import React from "react";
import "../Estilos/InicioSesion.css";
import { Link } from "react-router-dom";

export const InicioSesion = () => {
  return (
    <div className="inicio_sesion">
      <div className="bgcp">
        <div className="elipse"></div>
        <div className="bgc"></div>
      </div>
      <div className="appgastos">
        APP <br />
        Registro de gastos
      </div>
      <form>
        <div className="rectang1"></div>
        <div className="bienvl">Bienvenido</div>
        <div className="inp1">
          <div className="lin1"></div>
          <input type="text" className="usua" placeholder="Usuario" required />
        </div>
        <div className="inp2">
          <div className="lin2"></div>
          <input
            type="password"
            className="clavecc"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="btnl">
          <input type="submit" className="rectang2" value="Log in" />
          <Link className="crearl" to="/Crear-Cuenta">
            Crear Cuenta
          </Link>
        </div>
      </form>
    </div>
  );
};
