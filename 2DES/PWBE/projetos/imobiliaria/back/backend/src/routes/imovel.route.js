const express = require("express");

const imoveis = require("../controllers/imovel.controller");

const router = express.Router();

router.get("/imoveis", imoveis.listar);
router.get("/imoveis/:info", imoveis.buscar);
router.get("/imoveis/corretor/:id", imoveis.imoveisPorCorretor);
router.post("/imovel", imoveis.adicionar);
router.put("/imovel/:codigo/:status", imoveis.alterarStatus);

module.exports = router;