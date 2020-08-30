import { Document  } from 'mongoose';

export interface Clients  extends Document {
    id?: number;
    taxid: string;
    name: string;
    age: number;
    agreement: boolean;
    email: string;
}