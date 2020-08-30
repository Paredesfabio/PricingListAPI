import { Controller, Get, Post, Put, Delete, Body, Param, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags} from '@nestjs/swagger';
import { ClientsDTO } from '../dto/clients.dto';
import { ClientsService } from './clients.service';

@ApiTags('clients')
@Controller('clients')
@Controller('clients')
export class ClientsController {
    
    constructor(private clientService: ClientsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all clients' })
    async getClients(@Res() res) {
        const clientObj = await this.clientService.getClients();
        return res.status(HttpStatus.OK).json(clientObj);
    }  

    @Get(':clientId')
    @ApiOperation({ summary: 'Get client by id' })
    async getClient(@Res() res, @Param('clientId') clientId: string){
        const clientObj = await this.clientService.getClient(clientId);
        if (!clientObj) throw new NotFoundException('Client does not exist!');
        return res.status(HttpStatus.OK).json(clientObj);        
    }    

    @Post()
    @ApiOperation({ summary: 'Create clients' })
    createClient(@Res() res, @Body() clients: ClientsDTO){
        const clientObj = this.clientService.createClient(clients);
        return res.status(HttpStatus.OK).json({
            message: "Client has been created successfully",
            clientObj
        })        
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update client' })
    async updateClient(@Res() res, @Param('id') id: string, @Body() clients: ClientsDTO){
        const clientObj = await this.clientService.updateClient(id, clients);
        if (!clientObj) throw new NotFoundException('Client does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Client has been successfully updated',
            clientObj
        });
    }  
    
    @Delete(':id')
    @ApiOperation({ summary: 'Delete client' })
    async deleteClient(@Res() res, @Param('id') id: string){
        const clientObj = await this.clientService.deleteClient(id);
        if (!clientObj) throw new NotFoundException('Client does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Client has been deleted',
            clientObj
        });
    }      
}
