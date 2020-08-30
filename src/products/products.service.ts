import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsDTO } from '../dto/products.dto';
import { Products } from '../interfaces/products';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Products') private productModel: Model<Products>) {}
    
    async getProducts() {
        const products = await this.productModel.find()
                                    .populate('category')
                                    .populate('pricinglist');
        return products;
    }
    
    async getProduct(id: string) {
        const product = await this.productModel.findById(id)
                                    .populate('category')
                                    .populate('pricinglist');
        return product;                                    
    }    

    async createProduct(createProductDto: ProductsDTO): Promise<Products> {
        const createdProduct = new this.productModel(createProductDto);
        return await createdProduct.save();
    }  
    
    async updateProduct(id: string, createProductDto: ProductsDTO): Promise<Products> {
        return await this.productModel.findByIdAndUpdate(id, createProductDto, { new: true });
    }

    async deleteProduct(id:string): Promise<any> {
        return await this.productModel.findByIdAndRemove(id);
    }        
}
