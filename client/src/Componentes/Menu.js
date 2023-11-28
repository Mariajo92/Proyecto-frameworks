import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Estilos/menu.css";

export const Menu = () => {
  const [divActivado, setDivActivado] = useState(false);

  const activarDiv = () => {
    setDivActivado(!divActivado);
  };

  return (
    <div className="menu">
      <div className="appm">
        APP <br />
        Registro de gastos
      </div>
      <div className="bgm"></div>
      <div className="autolayautm">
        <button onClick={activarDiv} className="autolayoutm1">
          <div className="vectorm"></div>
        </button>
        {divActivado && (
          <div className="pruebamenu">
            <Link to="/Agregar-Transaccion">Agregar Gasto</Link>
            <Link to="/Informe">Informe</Link>
            <Link to="/">Salir</Link>
          </div>
        )}
      </div>
      <div className="bienvenidosm">Bienvenidos</div>
    </div>
  );
};

Menu.propTypes = {};
