import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CategoriesDTO {
    
    @ApiProperty({ example: 'Beverages', description: 'Category name' })
    @IsString()
    readonly name: string;
    
    @ApiProperty({  example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in justo arcu. Donec auctor non nisl non pellentesque. Nulla facilisi. Integer consectetur sem sed lacus molestie pulvinar.', 
                    description: 'Category description' })    
    @IsString()
    readonly description: string;
}

