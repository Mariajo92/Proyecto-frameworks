import axios from "axios";
export function formulario() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;
  var confirmar = document.getElementById("confirmar").value;
  var celular = document.getElementById("celular").value;
  if (password !== confirmar) {
    alert("Las contraseñas no coinciden");
  }

  var datos = {
    nombre: nombre,
    apellido: apellido,
    usuario: usuario,
    password: password,
    celular: celular,
  };
  try {
    // Realiza la solicitud POST al backend
    const response = axios.post(
      "http://localhost:5000/crearCuenta",
      JSON.stringify(datos)
    );
    console.log("Respuesta del servidor:", response.data);
  } catch (error) {
    console.error("Error al enviar datos:", error.message);
  }
}
