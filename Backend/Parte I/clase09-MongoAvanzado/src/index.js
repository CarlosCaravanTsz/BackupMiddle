import userModel from './models/user.model.js'
import mongoose from 'mongoose';

const uri ="mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { dbName: 'clase09_mongo1' }).then(async () => {
    console.log('DB connected');

    const response = await userModel.find({firstname:''})
})