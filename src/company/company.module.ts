import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { CompanyController } from './controllers/company.controller'
import { CompanyServices } from './services/company.service'

@Module({
  controllers: [CompanyController],
  imports: [DatabaseModule],
  providers: [CompanyServices],
})
export class CompanyModule {}
