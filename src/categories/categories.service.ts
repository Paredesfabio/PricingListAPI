import { Injectable } from '@nestjs/common';
import { CategoriesDTO } from '../dto/categories.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from '../interfaces/categories';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel('Categories') private categoryModel: Model<Categories>) {}
    
    async getCategories() {
        return await this.categoryModel.find();
    }
    
    async getCategory(id: string) {
        return await this.categoryModel.findById(id);
    }    

    async createCategory(createCategoryDto: CategoriesDTO): Promise<Categories> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return await createdCategory.save();
    }  
    
    async updateCategory(id: string, createCategoryDto: CategoriesDTO): Promise<Categories> {
        return await this.categoryModel.findByIdAndUpdate(id, createCategoryDto, { new: true });
    }

    async deleteCategory(id:string): Promise<any> {
        return await this.categoryModel.findByIdAndRemove(id);
    }    
}
