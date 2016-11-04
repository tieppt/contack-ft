import mongoose, {Schema} from 'mongoose';
import configMongoose, {url} from './db';

configMongoose(mongoose, url);

let userSchema = new Schema({
    name: String,
    job: String,
    email: String,
    birthdate: Date
}, {
    collection : 'users'
});

export const User = mongoose.model('User', userSchema);
