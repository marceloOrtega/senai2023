DROP DATABASE IF EXISTS cinema;
CREATE DATABASE cinema CHARSET=UTF8 COLLATE utf8_general_ci;
USE cinema;

CREATE TABLE filme(
    nome varchar(50) not null,
    sala varchar(50) not null,
    valor decimal(10,2) not null
);