const con = require('../dao/connect')
const Usuario = require('../models/usuario')

function formatar(l){
    const lista = []
    l.forEach(e => {
        lista.push(new Usuario(e))
    })

    return lista
}

const listar = (req,res ) => {
    let usuario = new Usuario(req.params)

    con.query(usuario.read(), (err, result)=>{
        if(err == null)
            res.json(formatar(result)).end()
        else
            res.status(500).json('Banco de Dados não respondeu.').end()
    })
}
const buscar = (req,res ) => {
    let usuario = new Usuario(req.params)

    con.query(usuario.buscar(), (err, result)=>{
        if(err == null)
            res.json(formatar(result)).end()
        else
            res.status(500).json('Banco de Dados não respondeu.').end()
    })
}

const atualizar = (req,res ) => {
    let usuario = new Usuario(req.body)

    con.query(usuario.update(), (err, result)=>{
        if(err == null)
            res.status(202).end()
        else
            res.status(500).json('Banco de Dados não respondeu.').end()
    })
}

const login = (req, res) => {
    let usuario = new Usuario(req.body)

    con.query(usuario.login(), (err, result)=>{
        if(err == null){
            if(result.length > 0)
                res.status(202).json(formatar(result)).end()
            else
                res.status(404).json(formatar(result)).end()
        }else
            res.status(500).json('Banco de Dados não respondeu.').end()
            
    })
}

module.exports = {
    listar,
    login,
    buscar,
    atualizar
}