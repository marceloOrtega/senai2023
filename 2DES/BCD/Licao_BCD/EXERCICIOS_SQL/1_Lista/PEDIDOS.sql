DROP DATABASE IF EXISTS atividade05;
CREATE DATABASE atividade05;
USE atividade05;

-- iniciando sql
CREATE TABLE clientes (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    cpf VARCHAR(20) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100)
);
-- criando a tabela
CREATE TABLE telefones (
    id INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (id) REFERENCES clientes (id)
);

CREATE TABLE entregadores (
    id_entregador INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(50) NOT NULL,
    veiculo VARCHAR(20) NOT NULL
);

CREATE TABLE produtos (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(25) NOT NULL,
    preco_unit DECIMAL(5,2) NOT NULL
);

CREATE TABLE pedidos (
    id_cliente INT NOT NULL,
    id_pedido INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_entregador INT NOT NULL,
    data DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    hora_entrega TIME NOT NULL,
    hora_fim TIME NOT NULL,
    quantidade INT NOT NULL,
    id_produto INT NOT NULL,
    preco_unit DECIMAL(5,2) NOT NULL
);

-- professor eu testei e deu certo. Agora estando certo ou nao, eu ja nao sei.