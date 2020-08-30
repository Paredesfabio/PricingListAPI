import { Schema } from 'mongoose';

export const ProductsSchema = new Schema({    
    name: {
        type: String,
        required: true
    },        
    barcode: {
        type: String,
        required: false
    },    
    sales: {
        type: Boolean,
        required: true,
        default: true
    },    
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },    
    pricinglist: {
        type: Schema.Types.ObjectId,
        ref: 'Pricinglist',
        required: true
    }
});