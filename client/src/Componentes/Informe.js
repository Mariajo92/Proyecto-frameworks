import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Estilos/informe.css";
import axios from "axios";

export const Informe = () => {
  const [selectedOption, setSelectedOption] = useState("");
  JSON.stringify({ selectedOption });
  const [datos, setDatos] = useState([]);
  const [divActivado, setDivActivado] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const obtenerGastos = async () => {
    const response = await axios.get(
      `http://localhost:5000/tabla${
        selectedOption ? `?categoria=${selectedOption}` : ""
      }${userId ? `&userId=${userId}` : ""}`
    );
    const data = response.data;
    setDatos(data);
    alert("Datos recibidos");
  };

  const selecctor = selectedOption !== "";

  const activarDiv = () => {
    setDivActivado(!divActivado);
  };

  const location = useLocation();
  const { search } = location;
  const userId = new URLSearchParams(search).get("userId");

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
        <button onClick={activarDiv} className="menuinf">
          <div className="vectorin"></div>
        </button>
        {divActivado && (
          <div className="prueba">
            <Link
              to={`/Agregar-Transaccion${userId ? `?userId=${userId}` : ""}`}
            >
              Agregar Gasto
            </Link>
            <Link to="/">Salir</Link>
          </div>
        )}
      </div>

      <select
        value={selectedOption}
        className="rectanguloinf7"
        onChange={handleChange}
        required
      >
        <option value="">-- Selecciona --</option>
        <option value="Categoria A">Categoria A</option>
        <option value="Categoria B">Categoria B</option>
        <option value="Categoria C">Categoria C</option>
      </select>
      <table className="tabla">
        <thead>
          <tr>
            <th>Id </th>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.valor}</td>
              <td>{item.agregado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btnbus">
        <button
          disabled={!selecctor}
          onClick={obtenerGastos}
          className="rectanguloin1"
        >
          Buscar
        </button>
      </div>
      <button className="frameinf">
        <Link
          to={`/Inicio${userId ? `?userId=${userId}` : ""}`}
          className="imageinf"
        ></Link>
      </button>
    </div>
  );
};

Informe.propTypes = {};
