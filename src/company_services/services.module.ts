import { Module } from '@nestjs/common'

import { DatabaseModule } from 'src/database/database.module'

import { CompanyServicesController } from './controllers/company_services.controller'
import { CompanyServices } from './services/company_services.service'

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyServicesController],
  providers: [CompanyServices],
})
export class ServicesModule {}
