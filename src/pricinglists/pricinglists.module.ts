import { Module } from '@nestjs/common';
import { PricinglistSchema } from './schemas/pricinglist.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PricinglistsController } from './pricinglists.controller';
import { PricinglistsService } from './pricinglists.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Pricinglist', schema: PricinglistSchema }])],
    controllers: [PricinglistsController],
    providers: [PricinglistsService] 
})
export class PricinglistsModule {}
