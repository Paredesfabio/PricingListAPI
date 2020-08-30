import { IsString, IsEmail, IsInt, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClientsDTO { 
    
    @ApiProperty({ example: '1938192222', description: 'Identification of Client' })
    @IsString()
    readonly taxid: string;

    @ApiProperty({ example: 'Pedro Peres', description: 'Name of Client' })
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 23, description: 'Age of Client' })
    @IsInt()
    readonly age: number;

    @ApiProperty({ example: true, description: 'Client is agreement' })
    @IsBoolean()
    readonly agreement: boolean;

    @ApiProperty({ example: 'example@test.com', description: 'Client email' })
    @IsEmail()
    readonly email: string;
}