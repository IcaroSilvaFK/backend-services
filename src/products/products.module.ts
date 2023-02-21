import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { ProductsService } from './services/products.service'
import { ProductsController } from './controllers/products.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
