import express from 'express';
import handlebars from 'express-handlebars'
import pokeRouter from './routes/pokemon.router.js'
import __dirname from './utils.js'
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Carpeta publica
app.use('/public', express.static(__dirname + '/public'));


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


app.use('/pokemon', pokeRouter)
app.get('/', async (req, res) => {
    res.send('It works great!');
});


const URI =
  "mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";
// Corremos el server
mongoose.set('strictQuery', false);
mongoose.connect(URI, {
    dbName: 'clase08_pokedb'
}).then(() => {
    console.log('Successfully connected to DB!');

    const server = app.listen(8080, () => console.log("Listening on port 8080..."));
    server.on("error", (e) => console.log(e));
}).catch(e => console.log('ERROR', e));


