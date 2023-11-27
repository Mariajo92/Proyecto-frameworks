const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gastos",
  port: "3307",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/usuario", (req, res) => {
  db.query("SELECT * FROM usuario", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/crear", (req, res) => {
  const { nombre, apellido, usuario, contraseña, celular } = req.body;
  db.query(
    `INSERT INTO usuario (nombre, apellido, usuario, contraseña, celular) VALUES (?, ?, ?, ?, ?)`,
    [nombre, apellido, usuario, contraseña, celular],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/gasto", (req, res) => {
  const { id, nombre, valor, categoria, descripcion } = req.body;
  db.query(
    `INSERT INTO gastos (id, nombre, valor, categoría, descripción, agregado, id_usuario) VALUES (?, ?, ?, ?, ?, (NOW()),19)`,
    [id, nombre, valor, categoria, descripcion],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/tabla", (req, res) => {
  const { categoria } = req.query;
  db.query(
    "SELECT id, nombre, valor, agregado FROM gastos WHERE categoría = ?",
    [categoria],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
