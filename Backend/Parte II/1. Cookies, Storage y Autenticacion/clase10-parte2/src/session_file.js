import express from 'express';
import session from 'express-session';
import FileStore from 'session-file-store';


const app = express();
const fileStore = FileStore(session)

app.use(session({
    store: new fileStore({
        path: './session',
        ttl: 100,
        retries: 2
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.get('/', (req, res) => {
    res.send('ok');
});

app.get('/login', (req, res) => {

    if (req.session.user) return res.send('Already logged in');

    const { username } = req.query;
    if (!username) return res.send('Need a username');

    req.session.user = username
    return res.send('Login success');
});


function auth(req, res, next) {
    req.session?.user ? next() : res.status(401).send('Auth error');

}


app.get('/private', auth, (req, res) => {
    res.send(`Private page ${req.session.user}`);
})



app.listen(8080);