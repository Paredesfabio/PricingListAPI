import { Document  } from 'mongoose';

export interface Pricinglists extends Document {
    id?: number;
    name: string;
    price: number;
    description: string;
}
