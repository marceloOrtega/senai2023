const express = require('express');
const cors = require('cors');

const corretorRoutes = require("./src/routes/routes");
const imovelRoutes = require("./src/routes/imovel.route");

const app= express();

app.use(cors());
app.use(express.json());

app.use(corretorRoutes);
app.use(imovelRoutes);

app.listen(3000, () => {
    console.log("rodando");
});