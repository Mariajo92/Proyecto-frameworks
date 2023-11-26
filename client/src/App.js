import React from "react";
import "./App.css";
import { Menu } from "./Componentes/Menu";
import { Bienvenido } from "./Componentes/Bienvenido";
import { InicioSesion } from "./Componentes/InicioSesion";
import { CrearCuenta } from "./Componentes/Crear_cuenta";
import { AgregarTransaccion } from "./Componentes/Agregar_transacción";
import { Informe } from "./Componentes/Informe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Bienvenido} />
        <Route path="/Inicio" Component={Menu} />
        <Route path="/Inicio-Sesion" Component={InicioSesion} />
        <Route path="/Crear-Cuenta" Component={CrearCuenta} />
        <Route path="/Agregar-Transaccion" Component={AgregarTransaccion} />
        <Route path="/Informe" Component={Informe} />
      </Routes>
    </div>
  );
}

export default App;
