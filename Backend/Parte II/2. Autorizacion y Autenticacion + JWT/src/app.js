import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import passport from 'passport';
import userRouter from './routes/session.route.js'
import __dirname from './utils.js'
import initializePassport from './config/passport.config.js'

const app = express()
const uri ="mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";
const dbName = "clase11_02";

app.use(express.json())

// Data for post json
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

// Handlebares
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Session Mongo
app.use(session({
    store: MongoStore.create({
        mongoUrl: uri,
        dbName,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 15
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/', userRouter);

mongoose.connect(uri, { dbName })
    .then(() => {
        console.log('DB connected 👌')
        app.listen(8080, () => {
            console.log('Listen 👂 ...')
        })
    })
    .catch(e => console.error(e));

