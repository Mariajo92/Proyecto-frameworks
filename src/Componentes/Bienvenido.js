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
        <div className="rectangle"></div>
        <div className="login">Log in </div>
      </div>
      <div className="crearcuenta">crear cuenta </div>
    </div>
  );
};
