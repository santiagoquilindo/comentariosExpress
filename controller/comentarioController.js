
const db = require("../config/database");

class ComentariosController {
    static async obtenerComentarios(req, res) {
        try {
            let coments = await db.query("SELECT * FROM COMENTARIOS");
            res.json(coments);
        } catch (e) {
            res.json({ mensaje: "Error en la consulta obteniendocomentarios" });
        }
    }
    static async insertarComentario(req, res) {
        try {
            let { tipo, descripcion, id_usuario } = req.body;
            await db.query("INSERT INTO COMENTARIOS (tipo,descripcion,id_usuario) VALUES (?,?,?)", [tipo, descripcion, id_usuario]);
            res.json(req.body);

        }
        catch (e) {
            res.json({ mensaje: "Error no se han insertado datos" });

        }

    }
}

module.exports = ComentariosController;

