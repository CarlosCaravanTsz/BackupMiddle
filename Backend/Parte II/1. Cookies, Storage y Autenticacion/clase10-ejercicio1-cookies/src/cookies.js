import express from 'express'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cookieParser('HacemosLasCookiesCifradas'));


app.get('/', (req, res) => {
    res.send('My Cookies');
});


app.get('/set', (req, res) => {
    res.cookie('cookieEri', 'Thanos siempre tuvo razon', { maxAge: 3000 })
        .cookie('cookieForEver', 'Forever and ever!')
        .cookie('cookieSigned', 'El valor de la cookie', { signed: true })
        .send('Cookies seteada')
});


app.get('/get', (req, res) => {
    const cookie = req.cookies;
    const cookieSigned = req.signedCookies

    console.log(cookie, cookieSigned);

    res.send('Se han leido las cookies');
});

app.get('/delete', (req, res) => {
    res.clearCookie('cookieForEver').send('Cookie borrado');
})


app.listen(8080);