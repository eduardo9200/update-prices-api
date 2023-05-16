import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { PacksModule } from './packs/packs.module';
import { ValidateCsvService } from './services/validate-csv/validate-csv.service';
import { UpdatePricesService } from './services/update-prices/update-prices.service';

@Module({
  imports: [PrismaModule, ProductsModule, PacksModule],
  controllers: [AppController],
  providers: [AppService, ValidateCsvService, UpdatePricesService],
})
export class AppModule {}
