import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PricinglistsDTO {

    @ApiProperty({ example: 'List 20%', description: 'Pricing list name' })
    @IsString()    
    name: string;

    @ApiProperty({ example: 50, description: 'Price' })
    @IsInt()        
    price: number;

    @ApiProperty({  example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in justo arcu. Donec auctor non nisl non pellentesque. Nulla facilisi. Integer consectetur sem sed lacus molestie pulvinar.', 
                    description: 'Pricing list description' })    
    @IsString()    
    description: string;
}