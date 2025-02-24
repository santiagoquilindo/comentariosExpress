const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/usuarioController");

router.get("/usuario", UsuarioController.obtenerUsuarios);
router.post("/usuario",UsuarioController.insertarUsuarios);

module.exports = router;

