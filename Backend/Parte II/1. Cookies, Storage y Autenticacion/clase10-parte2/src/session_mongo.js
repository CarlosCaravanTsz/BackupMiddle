import express from 'express';
import session from 'express-session';
import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo'

const app = express();

const URI =
  "mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";

app.use(session({
    store: MongoStore.create({
        mongoUrl: URI,
        dbName: 'sessions',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 100
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
    return req.session?.user ? next() : res.status(401).send('Auth error');

}


app.get('/private', auth, (req, res) => {
    res.send(`Private page ${req.session.user}`);
})



app.listen(8080, () => console.log('Listening on port 8080...'));