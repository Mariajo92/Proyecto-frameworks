const { Router } = require("express");
const db = require("../database/conexion.js");
const router = Router();

router.get("/crearCuenta", async (req, res) => {
  const datosDelFormulario = req.body;
  const { nombre, apellido, usuario, password, celular } = datosDelFormulario;
  await db.query(
    `INSERT INTO usuario (nombre, apellido, usuario, password, celular) VALUES ('${nombre}', '${apellido}', '${usuario}', '${password}' , '${celular}')`
  );
  res.json({ message: "Usuario creado correctamente" });
});

module.exports = router;
