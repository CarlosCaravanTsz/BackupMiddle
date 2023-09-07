import mongoose from 'mongoose';
import 

export default mongoose.model('users', new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: String,
    gender: String
}));
