import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'actividad-clase',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {

    let { name } = req.query || '';

    if(!name) return res.send(`Welcome !!`);

    if (!req.session.counter) {
        req.session.counter = 1;
        return res.send(`Welcome ${name}!!`);
    } else {
        req.session.counter++;
        return res.send(`Hola, ${name}, se ha visitado el sitio ${req.session.counter} veces!`);
    }



});


app.listen(8080);