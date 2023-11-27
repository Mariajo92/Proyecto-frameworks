import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Estilos/creasr_cuenta.css";

export const CrearCuenta = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    usuario: "",
    contraseña: "",
    confirmar: "",
    celular: 0,
  });
  JSON.stringify({ datos });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  //Funcion para enviar datos a la base de datos
  const enviarDatos = async () => {
    const response = await axios.get("http://localhost:5000/usuario");
    const usuario = response.data;
    const usuarioExiste = usuario.find(
      (usuario) => usuario.usuario === datos.usuario
    );
    if (usuarioExiste) {
      alert("El usuario ya existe");
      return;
    } else if (datos.contraseña !== datos.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    } else if (datos.celular.length !== 10) {
      alert("El numero de celular no es valido");
      return;
    } else {
      //Envio de datos a la base de datos
      axios.post("http://localhost:5000/crear", datos).then(() => {
        alert("Datos enviados");
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("usuario").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmar").value = "";
        document.getElementById("celular").value = "";
        setDatos({
          nombre: "",
          apellido: "",
          usuario: "",
          contraseña: "",
          confirmar: "",
          celular: 0,
        });
      });
    }
  };

  const isDataComplete =
    datos.nombre !== "" &&
    datos.apellido !== "" &&
    datos.usuario !== "" &&
    datos.contraseña !== "" &&
    datos.celular !== 0 &&
    datos.confirmar !== "";

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
        <input
          type="text"
          className="nombre"
          name="nombre"
          placeholder="Nombre"
          id="nombre"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>
      <div className="input4">
        <div className="line4"></div>
        <input
          type="password"
          className="clave"
          name="contraseña"
          placeholder="Contraseña"
          id="password"
          onChange={handleInputChange}
        />
      </div>
      <div className="input5">
        <div className="line5"></div>
        <input
          type="password"
          name="confirmar"
          className="confirmar"
          placeholder="Comfirmar Contraseña"
          onChange={handleInputChange}
          id="confirmar"
        />
      </div>
      <div className="input6">
        <div className="line6"></div>
        <input
          type="number"
          className="celular"
          name="celular"
          id="celular"
          placeholder="Celular"
          onChange={handleInputChange}
        />
      </div>
      <div className="btnc">
        <button
          type="sumit"
          disabled={!isDataComplete}
          onClick={enviarDatos}
          className="rectangulo1c"
        >
          Crear
        </button>
      </div>
      <Link className="crearcue" to="/Inicio-Sesion">
        Iniciar Sesion
      </Link>
    </div>
  );
};
