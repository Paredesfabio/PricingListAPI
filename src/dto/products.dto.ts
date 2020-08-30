import { IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductsDTO {
    
    @ApiProperty({ example: 'Strawberry', description: 'Product name' })
    @IsString()       
    name: string;

    @ApiProperty({ example: 'ST453535363', description: 'Product barcode' })
    @IsString()       
    barcode: string;    

    @ApiProperty({ example: true, description: 'Product for sale' })
    @IsBoolean()    
    sales: boolean;

    @ApiProperty({ example: '5f4bdb5de2d6f31fb0bb9e64', description: 'Reference to Categories' })
    @IsString()       
    category: string;

    @ApiProperty({ example: '5f4be051dcbe912dee6a5200', description: 'Reference to Pricinglists' })
    @IsString()       
    pricinglist:string;
}