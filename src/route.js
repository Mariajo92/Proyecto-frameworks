const express = require("express");
const bienvenido = require("./routes/bienvenido.js");
const app = express();

app.use(express.json());
//routes
app.use("/", bienvenido);
app.use("/", require("./routes/crearCuenta.js"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
