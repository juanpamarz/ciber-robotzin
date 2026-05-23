const express = require('express');
const path = require('path');
const scoreRoutes = require('./routes/scoreRoutes');

const app = express();
const clientPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json());
app.use('/api', scoreRoutes);
app.use(express.static(clientPath));
app.use('/vendor', express.static(path.join(__dirname, '../node_modules/phaser/dist')));

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
