import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'

const app = express();


app.engine('handlebars', handlebars.engine()); // Inicializamos motor de plantillas
app.set('views', __dirname + '/src/views');
app.set('view engine', 'handlebars');


app.use('/static', express.static(__dirname + '/public')); // Hacer la carpeta public disponible en el server


// Devuelve un html estatico por string, MALA PRACTICA
app.get('/', (req, res) => {
    res.send('<h1> Esto es un HTML </h1>')
});


// Devolvemos un archivo desde el servidor
app.get('/v2', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


//  Editamos el HTML antes de devolver al cliente
app.get('/v4', (req, res) => {
    const name = req.query.name || 'R2'
    res.send(`<h1>Esto es un HTML de ${name}. V4</h1>`);
});


app.get('/handlebars', (req, res) => {
    const name = req.query.name;
    res.render('v1', { name });
});

app.get('/handlebars/v2', (req, res) => {
    const name = req.query.name;
    res.render('v2', { name });
});


app.listen(8080);