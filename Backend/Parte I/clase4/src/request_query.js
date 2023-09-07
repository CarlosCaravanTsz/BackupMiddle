import express from 'express'

const app = express();

app.get('/saludo', (req, res) => {

    const edad = req.query.edad;

    res.send(`Tu edad es ${edad}`);
});

app.listen(8080);