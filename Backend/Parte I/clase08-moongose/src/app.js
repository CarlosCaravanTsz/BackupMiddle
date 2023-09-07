import express from 'express'
import userModel from './models/user.model.js'
import mongoose from 'mongoose'

const app = express();

app.use(express.json());

// Show all USERS
app.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.send({ result: 'success', payload: users })
    } catch {
        res.send({ result: 'error', error })
    }
});

// Insertar User
app.post('/', async (req, res) => {
    const result = await userModel.create(req.body);
    res.send({ status: 'success', payload: result });
});



const URL = "mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, {
    dbName: 'clase08_db'
}).then( () => {
    console.log('Connected successfully to DB...');
    app.listen(8080, () => console.log('Listening on port 8080...'));
}).catch( e => {
    console.log('Cannot connect to DB');
});


