import mongoose from 'npm:mongoose';
import {config} from '../config/deps.ts';

try{
    await mongoose.connect(config().MONGO_URL)
    console.log(`Conectado a la DB`)
} catch (error) {
    console.log(error.message)
    console.log(error.stack)
}