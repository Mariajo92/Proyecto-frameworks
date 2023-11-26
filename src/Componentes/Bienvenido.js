import { Link } from "react-router-dom";
import "../Estilos/bienvenido.css";

export const Bienvenido = () => {
  return (
    <div className="bienvenidos">
      <div className="bg"></div>
      <div className="appreg">
        APP <br />
        Registro de gastos
      </div>
      <div className="btn">
        <button className="rectangle">
          <Link className="login" to="/Inicio-Sesion"></Link>
          Ingresar
        </button>
      </div>
      <Link className="crearcuenta" to="/Crear-Cuenta">
        Crear Cuenta
      </Link>
    </div>
  );
};
