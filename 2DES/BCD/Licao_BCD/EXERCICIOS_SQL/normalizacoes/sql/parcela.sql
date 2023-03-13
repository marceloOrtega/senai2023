DROP DATABASE IF EXISTS parcelas;
CREATE DATABASE parcelas;
USE parcelas;

CREATE TABLE cliente (
    cod_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(30) NOT NULL,
    bairro VARCHAR(20) NOT NULL,
    cidade VARCHAR(20) NOT NULL,
    uf VARCHAR(5) NOT NULL
 
);


CREATE TABLE telefone(
   cod_cliente INT NOT NULL,
    telefone VARCHAR(15),
    celular VARCHAR(15),
    FOREIGN KEY(cod_cliente) REFERENCES cliente(cod_cliente)
   );

CREATE TABLE parcelas(
    cod_cliente INT NOT NULL,
    n_parcela INT NOT NULL,
    data_compra DATE NOT NULL,
    vencimento DATE NOT NULL,
    pagamento DATE,
    valor FLOAT(6,2),
    PRIMARY KEY(n_parcela),
    FOREIGN KEY(cod_cliente) REFERENCES cliente(cod_cliente)
);


-- importando cliente
LOAD DATA INFILE 'D:\Licao_BCD\EXERCICIOS_SQL\normalizacoes\dados\parcela/cliente_parcelas.CSV'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando telefone
LOAD DATA INFILE 'D:\Licao_BCD\EXERCICIOS_SQL\normalizacoes\dados\parcela/telefone_parcelas.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando parcela
LOAD DATA INFILE 'D:\Licao_BCD\EXERCICIOS_SQL\normalizacoes\dados\parcela/parcela_parcelas.CSV'
INTO TABLE parcela
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;