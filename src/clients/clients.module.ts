import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientsSchema } from './schemas/client.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Clients', schema: ClientsSchema }])],
    controllers: [ClientsController],
    providers: [ClientsService],
  })
export class ClientsModule {}
