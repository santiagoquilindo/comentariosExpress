const express = require("express");
const router = express.Router();
const ComentarioController = require("../controller/comentarioController");

router.get("/comentario", comentarioController.obtenerComentarios);
router.post("/comentario", comentarioController.insertarComentario);

module.exports = router;


// const express= require("express");
// const router = express.Router();
// const ComentarioController= require("../controller/comentarioController");

// router.get("/comentarios", ComentarioController.obtenerComentarios);
// router.post("/comentarios", ComentarioController.insertarComentario)

// module.exports=router