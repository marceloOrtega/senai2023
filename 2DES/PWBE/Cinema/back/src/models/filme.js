class Filme {

    constructor(i) {
        this.nome = i.nome
        this.sala = i.sala
        this.valor = i.valor
    }

    create() {
        return `INSERT INTO filme VALUE('${this.nome}','${this.sala}',${this.valor})`
    }

    read() {
        if (this.nome == undefined)
            return `SELECT * FROM filme`
        else
            return `SELECT * FROM filme WHERE nome = '${this.nome}'`
    }

    update() {
        return `UPDATE filme SET nome = '${this.nome}', sala = '${sala}' valor = '${this.valor}', WHERE nome = '${this.nome}'`
    }

    delete() {
        return `DELETE FROM filme WHERE nome = '${this.nome}'`
    }
}

module.exports = Filme 