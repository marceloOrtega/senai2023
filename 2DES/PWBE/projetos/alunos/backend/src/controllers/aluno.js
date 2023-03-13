const con = require('../dao/connect');

const criar = (req, res) => {
    let { ra, nome, nasc, telefone, cep, uf, escola } = req.body;
    let query =  `INSERT INTO alunos VALUE('${ra}', '${nome}', '${nasc}', '${cep}', '${uf}', '${escola}')`;
    
    con.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(201).end();
        } else {
            res.json(400).end();
        }
    });
}

const listar = (req, res) => {
    let query = `SELECT * FROM alunos;`

    con.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    });
}

const pesquisar = (req, res) => {
    let { ra } = req.body;
    let query = `SELECT * FROM alunos WHERE ra = "${ra}"`;

    con.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    });
}

module.exports = {
    criar,
    listar,
    pesquisar
}