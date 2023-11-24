const express = require("express");
const bienvenido = require("./routes/bienvenido.js");
const app = express();

app.use(express.json());
//routes
app.use("/", bienvenido);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
