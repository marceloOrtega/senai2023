const express = require("express");
const router = express.Router();

const Filme = require('../controllers/filme');

router.get('/', Filme.teste);
router.post('/filme/criar', Filme.criar);
router.get('/filme/listar', Filme.listar);
router.get('/filme/listar/:nome', Filme.listar);
router.put('/filme/alterar', Filme.alterar);
router.delete('/filme/excluir/:nome', Filme.excluir);

module.exports = router