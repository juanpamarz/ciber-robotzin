const express = require('express');
const path = require('path');
const app = express();

// Esto le dice al servidor: "Todo lo que esté en la carpeta 'client', muéstralo"
app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => {
    console.log("Servidor iniciado. Abre http://localhost:3000 en tu navegador.");
});