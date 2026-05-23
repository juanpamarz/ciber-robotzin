const express = require('express');
const path = require('path');

const app = express();
const clientPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.static(clientPath));
app.get('/', (_request, response) => {
    response.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
