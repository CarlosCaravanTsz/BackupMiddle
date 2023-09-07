import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import viewsRouter from "./routes/views.routes.js";
import __dirname from './utils.js'

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.get("/", viewsRouter);

const URL = "mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, { dbName: 'clase09_mongo01' }).then(() => console.log('Connected to DB...')).then(app.listen(8080, () => console.log('Listening on port 8080...')));



