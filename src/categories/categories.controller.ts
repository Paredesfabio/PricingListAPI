import { Controller, Get, Post, Put, Delete, Body, Param, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoriesDTO } from '../dto/categories.dto';

@ApiTags('categories')
@Controller('categories')
@Controller('categories')
export class CategoriesController {
    constructor(private categoryService: CategoriesService) { }

    @Get()
    @ApiOperation({ summary: 'Get all categories' })
    async getCategories(@Res() res) {
        const categoryObj = await this.categoryService.getCategories();
        return res.status(HttpStatus.OK).json(categoryObj);
    }  

    @Get(':id')
    @ApiOperation({ summary: 'Get category by id' })
    async getCategory(@Res() res, @Param('id') id: string){
        const categoryObj = await this.categoryService.getCategory(id);
        if (!categoryObj) throw new NotFoundException('Category does not exist!');
        return res.status(HttpStatus.OK).json(categoryObj);        
    }    

    @Post()
    @ApiOperation({ summary: 'Create categories' })
    createCategory(@Res() res, @Body() category: CategoriesDTO){
        const categoryObj = this.categoryService.createCategory(category);
        return res.status(HttpStatus.OK).json({
            message: "Category has been created successfully",
            categoryObj
        })        
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update categories' })
    async updateCategory(@Res() res, @Param('id') id: string, @Body() category: CategoriesDTO){
        const categoryObj = await this.categoryService.updateCategory(id, category);
        if (!categoryObj) throw new NotFoundException('Category does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Category has been successfully updated',
            categoryObj
        });
    }  
    
    @Delete(':id')
    @ApiOperation({ summary: 'Delete categories' })
    async deleteCategory(@Res() res, @Param('id') id: string){
        const categoryObj = await this.categoryService.deleteCategory(id);
        if (!categoryObj) throw new NotFoundException('Category does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Category has been deleted',
            categoryObj
        });
    }          
}
