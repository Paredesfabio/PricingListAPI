import { Controller, Get, Post, Put, Delete, Body, Param, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags} from '@nestjs/swagger';
import { PricinglistsService } from './pricinglists.service';
import { PricinglistsDTO } from '../dto/pricinglists.dto';

@ApiTags('pricinglists')
@Controller('pricinglists')
@Controller('pricinglists')
export class PricinglistsController {
    constructor(private pricinglistService: PricinglistsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all pricing lists' })
    async getPricinglists(@Res() res) {
        const pricinglistObj = await this.pricinglistService.getPricinglists();
        return res.status(HttpStatus.OK).json(pricinglistObj);
    }  

    @Get(':id')
    @ApiOperation({ summary: 'Get pricing list by id' })
    async getPricinglist(@Res() res, @Param('id') id: string){
        const pricinglistObj = await this.pricinglistService.getPricinglist(id);
        if (!pricinglistObj) throw new NotFoundException('Pricing list does not exist!');
        return res.status(HttpStatus.OK).json(pricinglistObj);        
    }    

    @Post()
    @ApiOperation({ summary: 'Create pricing lists' })
    createPricinglist(@Res() res, @Body() pricinglist: PricinglistsDTO){
        const pricinglistObj = this.pricinglistService.createPricinglist(pricinglist);
        return res.status(HttpStatus.OK).json({
            message: "Pricing list has been created successfully",
            pricinglistObj
        })        
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update pricing lists' })
    async updatePricinglist(@Res() res, @Param('id') id: string, @Body() pricinglist: PricinglistsDTO){
        const pricinglistObj = await this.pricinglistService.updatePricinglist(id, pricinglist);
        if (!pricinglistObj) throw new NotFoundException('Pricing list does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Pricing list has been successfully updated',
            pricinglistObj
        });
    }  
    
    @Delete(':id')
    @ApiOperation({ summary: 'Delete pricing lists' })
    async deletePricinglist(@Res() res, @Param('id') id: string){
        const pricinglistObj = await this.pricinglistService.deletePricinglist(id);
        if (!pricinglistObj) throw new NotFoundException('Pricing list does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Pricing list has been deleted',
            pricinglistObj
        });
    }              
}
