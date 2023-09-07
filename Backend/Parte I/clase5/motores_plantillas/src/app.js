import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'
import userRouter from './routes/user.router.js'


const app = express();
app.use('/static', express.static(__dirname +'/public'));

// Inicializamos el motor de plantilla
app.engine('handlebars', handlebars.engine());

// Indicamos donde estan las plantillas

app.set('views', __dirname + '/views');

// Indicamos que motor de plantillas usar
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Page',
        name: 'Valentin Abalo'
    });
});

app.use('/user', userRouter);

app.listen(8080);