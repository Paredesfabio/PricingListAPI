import { Clients } from './../interfaces/clients';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientsDTO } from '../dto/clients.dto';

@Injectable()
export class ClientsService {

    constructor(@InjectModel('Clients') private clientModel: Model<Clients>) {}
    
    async getClients() {
        return await this.clientModel.find();
    }
    
    async getClient(id: string) {
        return await this.clientModel.findById(id);
    }    

    async createClient(createClientDto: ClientsDTO): Promise<Clients> {
        const createdClient = new this.clientModel(createClientDto);
        return await createdClient.save();
    }  
    
    async updateClient(id: string, createClientDto: ClientsDTO): Promise<Clients> {
        return await this.clientModel.findByIdAndUpdate(id, createClientDto, { new: true });
    }

    async deleteClient(id:string): Promise<any> {
        return await this.clientModel.findByIdAndRemove(id);
    }

}
