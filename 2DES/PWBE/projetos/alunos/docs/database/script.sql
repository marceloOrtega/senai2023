DROP DATABASE IF EXISTS alunos;
CREATE DATABASE alunos CHARSET=UTF8 COLLATE utf8_general_ci;
USE alunos;

CREATE TABLE alunos (
    ra VARCHAR(50) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    data_nasc DATE NOT NULL,
    cep VARCHAR(15) NOT NULL,
    uf CHAR(2) NOT NULL,
    escola VARCHAR(50)
);

CREATE TABLE telefones (
    ra VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (ra) REFERENCES alunos(ra)
);

INSERT INTO alunos VALUES
("0001", 'Diego Oliveira', '2023/03/03', '13920-000', 'SP', 'João Alvarenga'),
("0002", 'Silvia de Soares', '2005/07/13', '13910-568', 'RJ', 'Escola Estadual do RJ');

INSERT INTO telefones VALUES
('0001', '(19)99877-2836'),
('0001', '(19)996898117'),
('0002', '(19)99856-5623'),
('0002', '(19)992776088');

SELECT a.nome, t.telefone FROM alunos a
JOIN telefones t
ON t.ra = a.ra;
