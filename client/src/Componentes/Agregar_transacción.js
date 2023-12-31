import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Estilos/Agregar_transaccion.css";
import axios from "axios";

export const AgregarTransaccion = () => {
  const [datos, setDatos] = useState({
    id: "",
    nombre: "",
    valor: 0,
    categoria: "",
    descripcion: "",
    id_usuario: 0,
  });

  JSON.stringify({ datos });

  const [divActivado, setDivActivado] = useState(false);

  const activarDiv = () => {
    setDivActivado(!divActivado);
  };
  const location = useLocation();
  const { search } = location;
  const userId = new URLSearchParams(search).get("userId");

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
      id_usuario: userId,
    });
  };

  const envioDatos = () => {
    axios.post("http://localhost:5000/gasto", datos).then(() => {
      alert("Datos enviados");
      document.getElementById("id").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("valor").value = "";
      document.getElementById("categoria").value = "-- Selecciona --";
      document.getElementById("descripcion").value = "";
      setDatos({
        id: "",
        nombre: "",
        valor: 0,
        categoria: "",
        descripcion: "",
      });
    });
  };

  const datosExistentes =
    datos.id !== "" &&
    datos.nombre !== "" &&
    datos.valor !== 0 &&
    datos.categoria !== "-- Selecciona --";

  return (
    <div className="agregartransaccion">
      <div className="rectanguloagr2"></div>
      <div className="appagr">
        APP <br />
        Registro de gastos
      </div>
      <div className="agregartrn">Agregar transacciones</div>
      <div className="numid">número id</div>
      <div className="nomtran">Nombre del gasto </div>
      <div className="valortran">Valor transferencia </div>
      <div className="categoriatrn">Categoria </div>
      <div className="infotran">Información adicional</div>
      <div className="componentran">
        <button onClick={activarDiv} className="autotrans">
          <div className="vectortran"></div>
        </button>
        {divActivado && (
          <div className="pruebatrans">
            <Link to={`/Informe${userId ? `?userId=${userId}` : ""}`}>
              Informe
            </Link>
            <Link to="/">Salir</Link>
          </div>
        )}
      </div>
      <input
        type="text"
        className="tran1"
        id="id"
        name="id"
        onChange={handleInputChange}
      ></input>
      <input
        type="text"
        className="tran2"
        id="nombre"
        name="nombre"
        onChange={handleInputChange}
      ></input>
      <input
        type="number"
        className="tran3"
        id="valor"
        name="valor"
        onChange={handleInputChange}
      ></input>
      <select
        id="categoria"
        name="categoria"
        value={datos.categoria}
        className="tran4"
        onChange={handleInputChange}
      >
        <option value="">-- Selecciona --</option>
        <option value="Categoria A">Categoria A</option>
        <option value="Categoria B">Categoria B</option>
        <option value="Categoria C">Categoria C</option>
      </select>
      <input
        type="text"
        className="tran5"
        id="descripcion"
        name="descripcion"
        onChange={handleInputChange}
      ></input>
      <div className="btntran">
        <button
          disabled={!datosExistentes}
          onClick={envioDatos}
          className="rectangulotran"
        >
          Agregar
        </button>
      </div>
      <button className="frametran">
        <Link
          to={`/Inicio${userId ? `?userId=${userId}` : ""}`}
          className="imagetran"
        ></Link>
      </button>
    </div>
  );
};
AgregarTransaccion.propTypes = {};
