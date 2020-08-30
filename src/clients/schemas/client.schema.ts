import { Schema } from 'mongoose';

export const ClientsSchema = new Schema({
    taxid: String,
    name: String,
    age: Number,
    agreement: Boolean,
    email: String,    
});