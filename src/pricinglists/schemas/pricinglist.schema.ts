import { Schema } from 'mongoose';

export const PricinglistSchema = new Schema({    
    name: String,
    price: Number,
    description: String,
});