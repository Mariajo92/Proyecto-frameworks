import React from "react";
import "./App.css";
import { Menu } from "./Componentes/Menu";
import { Bienvenido } from "./Componentes/Bienvenido";
import { InicioSesion } from "./Componentes/InicioSesion";
import { CrearCuenta } from "./Componentes/Crear_cuenta";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Bienvenido} />
        <Route path="/Inicio" Component={Menu} />
        <Route path="/Inicio-Sesion" Component={InicioSesion} />
        <Route path="/Crear-Cuenta" Component={CrearCuenta} />
      </Routes>
    </div>
  );
}

export default App;
