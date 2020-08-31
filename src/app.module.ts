import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { PricinglistsModule } from './pricinglists/pricinglists.module';

@Module({
  imports: [  ClientsModule, 
              ProductsModule, 
              CategoriesModule, 
              PricinglistsModule,
              MongooseModule.forRoot('mongodb+srv://username:password@restservernode-g2em6.mongodb.net/pricingListAPI', { useFindAndModify: false })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
