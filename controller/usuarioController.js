const db = require("../config/database");
class UsuarioController {
    static async obtenerUsuarios(req, res) {
        try {
            let usuarios = await db.query("SELECT * FROM usuarios");
            res.json(usuarios)
        }
        catch (e) {
            res.json({ mensaje: "error en la consulta obtenerusuarios" });

        }
    }
    static async insertarUsuarios(req, res) {
        try {
            let { nombre, email, password } = req.body;
            await db.query("insert into usuarios(nombre,email,password) VALUES (?,?,?)", [nombre, email, password]);
            res.json(req.body);

        }
        catch (e) {
            res.json({ mensaje: "Error no se han insertado datos" });

        }

    }
}

module.exports = UsuarioController