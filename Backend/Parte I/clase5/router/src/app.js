import express from 'express';
import usersRouter from './routes/user.router.js'
//const usersRouter = require('./routes/user.router')
import petsRouter from './routes/pet.router.js'

const app = express();

app.use((req, res, next) => { // DEFINIENDO CUSTOMED-MIDDLEWARE A NIVEL APPLICACION
    const url = req.path;
    console.log(`[${url}] Time:, ${new Date().toLocaleTimeString()}`);

    if (url === '/health') return res.send('Esta es una URL prohibida');

    next(); // Importante para que pase a la siguiente capa de middleware, si no NO pasa y nunca manda response
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke');
})

function myMiddleware(req, res, next) { // FUNCION DE MIDDLEWARE A NIVEL DEL ENDPOINT
    req.data = 'My Data';
    console.log('Agregando la data');
    next()
}

function m1(req, res, next) {
    console.log('M1');
    next();
}

function m2(req, res, next) {
    console.log('M2');
    next();
}


app.use(express.json());
app.use(express.static('./src/public'))
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', m1, m2, usersRouter); // SE PUEDEN AGREGAR N CANTIDAD DE MIDDLEWARES
app.use('/api/pets', myMiddleware, petsRouter) // AGREGAS MIDDLEWARE A NIVEL DE ENDPOINT
app.use('/health', (req, res) => res.send('OK'));


// Con router podemos agregar las rutas que son iguales pero usan pocas cosas diferentes

// app.get('/api/products', (req, res) => console.log('Hola get'));
// app.post('/api/products', (req, res) => console.log('Hpla post'));
// app.put('/api/products', (req, res) => console.log('Hola put'));
// app.delete('/api/products', (req, res) => console.log('Hola delete'));


// app.get('/api/users', (req, res) => console.log('Hola get'));
// app.post('/api/users', (req, res) => console.log('Hpla post'));
// app.put('/api/users', (req, res) => console.log('Hola put'));
// app.delete('/api/users', (req, res) => console.log('Hola delete'));

// app.get('/api/carts', (req, res) => console.log('Hola get'));
// app.post('/api/carts', (req, res) => console.log('Hpla post'));
// app.put('/api/carts', (req, res) => console.log('Hola put'));
// app.delete('/api/carts', (req, res) => console.log('Hola delete'));







app.listen(8080);