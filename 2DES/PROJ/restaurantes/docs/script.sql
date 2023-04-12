DROP DATABASE IF EXISTS restaurantes;
CREATE DATABASE restaurantes;
USE restaurantes;

CREATE TABLE clientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);
CREATE TABLE categorias(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);
CREATE TABLE restaurantes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    categoriaId INT NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    FOREIGN KEY (categoriaId) REFERENCES categorias(id)
);
CREATE TABLE cardapio(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restauranteId INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurantes(id)
);
CREATE TABLE avaliacao(
    restauranteId INT NOT NULL,
    clienteId INT NOT NULL,
    data DATE NOT NULL,
    nota INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurantes(id),
    FOREIGN KEY (clienteId) REFERENCES clientes(id)
);

INSERT INTO categorias VALUES
("","Habibs"),
("","Campona"),
("","Arroz"),
("","Feijão");

INSERT INTO restaurantes VALUES
("","LATITUDE HABIBS", 1, "Rua Vicente,58"),
("","RESTAURANTE CAMPONA", 2, "Rua camponinha, 2"),
("","ARROZINHO DO BOM", 3, "Rua do arroz, 33"),
("","FEIJAOZIN", 4 , "Feijaozin, 52");

INSERT INTO cardapio VALUES
("", 1, "SALGADO BIBS", 49.99),
("", 2, "HAMBUMGUER CAMPONINHA", 8.99),
("", 3, "ARROZ DOCE", 39.99),
("", 4, "FEIJOADA", 20.99);