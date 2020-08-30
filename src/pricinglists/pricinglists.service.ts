import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pricinglists } from 'src/interfaces/pricinglist';
import { PricinglistsDTO } from '../dto/pricinglists.dto';

@Injectable()
export class PricinglistsService {

    constructor(@InjectModel('Pricinglist') private plModel: Model<Pricinglists>) {}
    
    async getPricinglists() {
        return await this.plModel.find();
    }
    
    async getPricinglist(id: string) {
        return await this.plModel.findById(id);
    }    

    async createPricinglist(createPLDto: PricinglistsDTO): Promise<Pricinglists> {
        const createdCategory = new this.plModel(createPLDto);
        return await createdCategory.save();
    }  
    
    async updatePricinglist(id: string, createPLDto: PricinglistsDTO): Promise<Pricinglists> {
        return await this.plModel.findByIdAndUpdate(id, createPLDto, { new: true });
    }

    async deletePricinglist(id:string): Promise<any> {
        return await this.plModel.findByIdAndRemove(id);
    }    

}
