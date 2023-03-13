const con = require('../dao/connect')
const Filme = require('../models/filme')

const teste = (req, res) => {
    res.json("cinema Respondendo").end()
}

const criar = (req, res) => {
    let filme = new Filme(req.body)
    con.query(filme.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let filme = new Filme(req.params)
    con.query(filme.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let filme = new Filme(req.body)
    con.query(filme.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let filme = new Filme(req.params)
    con.query(filme.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}