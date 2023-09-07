import express from 'express'

const app = express();

app.get('/saludo/:nombre', () => {
    console.log(req.params)
    const nombre = req.params.nombre;
    res.send(`Saludos a ${nombre}`);
});

app.listen(8080);