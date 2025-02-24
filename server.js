const express = require("express"); // Importar Express
const dotenv = require("dotenv"); // Importar dotenv para manejar variables de entorno
const usuarioRouter = require("./router/usuarioRouter"); // Importar rutas de usuarios
const comentarioRouter = require("./router/comentarioRouter"); // Importar rutas de comentarios

// Configurar dotenv para cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use("/api", usuarioRouter); // Todas las rutas de usuarios empezarán con /api
app.use("/api", comentarioRouter); // Todas las rutas de comentarios empezarán con /api

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Usar el puerto de las variables de entorno o 3000 por defecto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});