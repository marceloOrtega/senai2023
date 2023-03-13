const express = require('express');
const router = express.Router();
const Aluno = require('../controllers/aluno');

router.post('/aluno', Aluno.criar);
router.get('/alunos', Aluno.listar);
router.get('/pesqAluno', Aluno.pesquisar);

module.exports = router