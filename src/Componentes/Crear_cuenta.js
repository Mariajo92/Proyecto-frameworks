import React, { useState } from "react";
import "../Estilos/creasr_cuenta.css";
import { data } from "../Data/datos";

export const CrearCuenta = () => {
  const [datos, setDatos] = useState({ datos: data.usuario });
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    apellido: "",
    usuario: "",
    password: "",
    confirmar: "",
    celular: "",
  });

  function insertarDatos() {
    var valorNuevo = form;
    valorNuevo.id = datos.length + 1;
    var lista = datos;
    lista.push(valorNuevo);
    setDatos(lista);

    console.log(datos);
  }

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
            name="nombre"
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
            name="apellido"
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
            name="usuario"
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
            name="password"
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
            name="celular"
            id="celular"
            placeholder="Celular"
            required
          />
        </div>
        <div className="btnc">
          <button type="sumit" onClick={insertarDatos} className="rectangulo1c">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

CrearCuenta.propTypes = {};
