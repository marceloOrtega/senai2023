DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia;
USE academia;

CREATE TABLE aluno (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    telefone INT NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    nascimento DATE NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE telefone(
    id_cliente INT NOT NULL,
    telefone INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES aluno(id)
);

CREATE TABLE exercicio(
    descricao VARCHAR(50) NOT NULL,
    aparelho VARCHAR(20),
    grupo_muscular VARCHAR(20) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
   PRIMARY KEY(id)
);

CREATE TABLE ficha(
   id_aluno INT NOT NULL,
   id_aparelho INT NOT NULL,
   dia_semana VARCHAR(20) NOT NULL,
   serie INT,
   FOREIGN KEY(id_aluno) REFERENCES aluno(id),
   FOREIGN KEY(id_aparelho) REFERENCES exercicio(id)
);


LOAD DATA INFILE '/aluno.csv'
INTO TABLE aluno
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM aluno;

LOAD DATA INFILE 'D:\Licao_BCD\EXERCICIOS_SQL\normalizacoes\dados\academia/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:\Licao_BCD\EXERCICIOS_SQL\normalizacoes\dados\academia/exercicio.csv'
INTO TABLE exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'D:\Licao_BCD\EXERCICIOS_SQL\normalizacoes\dados\academia/ficha.csv'
INTO TABLE ficha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
