import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'
import sessionRouter from './routes/session.router.js'
import viewsRouter from "./routes/views.router.js";
import userModel from './models/user.model.js'


const app = express();
const URI = "mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'clase10_02';

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // para leer desde req.body

app.use(session({
    store: MongoStore.create({
        mongoUrl: URI,
        dbName,
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


app.get('/health', (req, res) => res.send('ok'));
app.use('/api/session', sessionRouter);
app.use('/', viewsRouter);


mongoose.connect(URI, { dbName }).then(() => {
    console.log('Connected to DB...');
    app.listen(8080, () => console.log('Listening...'))
})