import React from "react";
import PropTypes from "prop-types";
import "../Estilos/menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="appm">
        APP <br />
        Registro de gastos
      </div>
      <div className="bgm"></div>
      <div className="autolayautm">
        <div className="autolayoutm1">
          <div className="vectorm"></div>
        </div>
      </div>
      <div className="bienvenidosm">Bienvenidos</div>
    </div>
  );
};

Menu.propTypes = {};
