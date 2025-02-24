create database BDComentarios;
USE BDComentarios;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    id_usuario INT,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

