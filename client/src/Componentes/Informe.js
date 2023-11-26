import React, { useState } from "react";
import PropTypes from "prop-types";
import "../Estilos/informe.css";

export const Informe = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="informe">
      <div className="rectanguloin2"></div>
      <div className="appinf">
        APP <br />
        Registro de gastos
      </div>
      <div className="informe2">Informe</div>
      <div className="cateinf">Categoria</div>
      <div className="component2inf">
        <div className="menuinf">
          <div className="vectorin"></div>
        </div>
      </div>
      <select
        value={selectedOption}
        className="rectanguloinf7"
        onChange={handleChange}
      >
        <option value="">-- Selecciona --</option>
        <option value="Categoria A">Categoria A</option>
        <option value="Categoria B">Categoria B</option>
        <option value="Categoria C">Categoria C</option>
      </select>
      <div className="btntran">
        <div className="rectangulotran"></div>
        <div className="agrgartran">Buscar</div>
      </div>
      <div className="frametran">
        <div className="imagetran"></div>
      </div>
    </div>
  );
};

Informe.propTypes = {};
