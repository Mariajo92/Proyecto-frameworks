import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Estilos/menu.css";

export const Menu = () => {
  const [divActivado, setDivActivado] = useState(false);

  const activarDiv = () => {
    setDivActivado(!divActivado);
  };

  const location = useLocation();
  const { search } = location;
  const userId = new URLSearchParams(search).get("userId");

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
            <Link
              to={`/Agregar-Transaccion${userId ? `?userId=${userId}` : ""}`}
            >
              Agregar Gasto
            </Link>
            <Link to={`/Informe${userId ? `?userId=${userId}` : ""}`}>
              Informe
            </Link>
            <Link to="/">Salir</Link>
          </div>
        )}
      </div>
      <div className="bienvenidosm">Bienvenidos</div>
    </div>
  );
};

Menu.propTypes = {};
