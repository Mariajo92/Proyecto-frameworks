const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_gastos",
  port: "3307",
});

db.connect((error) => {
  if (error) {
    console.log("Error en la conexión a la base de datos" + error);
    return;
  }
  console.log("Conexión exitosa");
});
module.exports = db;
