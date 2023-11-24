const { Router } = require("express");
const db = require("../database/conexion.js");
const router = Router();

router.get("/", async (req, res) => {
  await db.query("SELECT * FROM usuario", (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
