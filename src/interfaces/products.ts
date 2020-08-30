import { Document  } from 'mongoose';

export interface Products  extends Document {
    id?: number;
    name: string,
    barcode: string,    
    sales: boolean,
    category: string,
    pricinglist:string,
}