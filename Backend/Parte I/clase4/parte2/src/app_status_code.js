import express from 'express'

const app = express();

app.get('/api/productos', (req, res) => {
    res.status(200).send('Mostrando lista de productos ... []');
});

app.post('/api/products', (req, res) => {
    res.status(200).send('Creando la lista de productos... ');
});

app.put('/api/products', (req, res) => {
    res.status(200).send('Actualizando los productos');
});

app.delete('/api/products', (req, res) =>)