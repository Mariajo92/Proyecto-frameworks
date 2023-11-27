import React, { useState } from "react";
import "../Estilos/InicioSesion.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const InicioSesion = () => {
  const [data, setData] = useState({
    usuario: "",
    contraseña: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const ingresar = () => {
    axios.get("http://localhost:5000/usuario").then((response) => {
      const usuario = response.data;
      const usuarioExiste = usuario.find(
        (usuario) => usuario.usuario === data.usuario
      );
      if (usuarioExiste) {
        const contraseñaCorrecta = usuario.find(
          (usuario) => usuario.contraseña === data.contraseña
        );
        if (contraseñaCorrecta) {
          const id = usuarioExiste.id;
          alert("Bienvenido");
          navigate(`/Inicio${id ? `?userId=${id}` : ""}`);
          document.getElementById("usuario").value = "";
          document.getElementById("password").value = "";
          setData({
            usuario: "",
            contraseña: "",
          });
        } else {
          alert("Contraseña incorrecta");
          return;
        }
      } else {
        alert("El usuario no existe");
        return;
      }
    });
  };
  const isDataComplete = data.usuario !== "" && data.contraseña !== "";
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
      <div className="rectang1"></div>
      <div className="bienvl">Bienvenido</div>
      <div className="inp1">
        <div className="lin1"></div>
        <input
          id="usuario"
          type="text"
          name="usuario"
          className="usua"
          placeholder="Usuario"
          onChange={handleInputChange}
        />
      </div>
      <div className="inp2">
        <div className="lin2"></div>
        <input
          id="password"
          type="password"
          name="contraseña"
          className="clavecc"
          placeholder="Contraseña"
          onChange={handleInputChange}
        />
      </div>
      <div className="btnl">
        <button
          disabled={!isDataComplete}
          onClick={ingresar}
          className="rectang2"
        >
          Ingresar
        </button>
        <Link className="crearl" to="/Crear-Cuenta">
          Crear Cuenta
        </Link>
      </div>
    </div>
  );
};
