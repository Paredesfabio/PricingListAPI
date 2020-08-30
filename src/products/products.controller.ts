import { Controller, Get, Post, Put, Delete, Body, Param, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { ProductsDTO } from '../dto/products.dto';

@ApiTags('products')
@Controller('products')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all products' })
    async getProducts(@Res() res) {
        const productObj = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json(productObj);
    }  

    @Get(':id')
    @ApiOperation({ summary: 'Get product by id' })
    async getProduct(@Res() res, @Param('id') id: string){
        const productObj = await this.productService.getProduct(id);
        if (!productObj) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json(productObj);        
    }    

    @Post()
    @ApiOperation({ summary: 'Create products' })
    createProduct(@Res() res, @Body() product: ProductsDTO){
        const productObj = this.productService.createProduct(product);
        return res.status(HttpStatus.OK).json({
            message: "Product has been created successfully",
            productObj
        })        
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update products' })
    async updateProduct(@Res() res, @Param('id') id: string, @Body() product: ProductsDTO){
        const productObj = await this.productService.updateProduct(id, product);
        if (!productObj) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product has been successfully updated',
            productObj
        });
    }  
    
    @Delete(':id')
    @ApiOperation({ summary: 'Delete products' })
    async deleteProduct(@Res() res, @Param('id') id: string){
        const productObj = await this.productService.deleteProduct(id);
        if (!productObj) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product has been deleted',
            productObj
        });
    }              
}
