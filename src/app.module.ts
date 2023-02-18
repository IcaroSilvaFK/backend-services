import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CompanyModule } from './company/company.module'

import { ServicesModule } from './company_services/services.module'
import { FinanceModule } from './finance/finance.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServicesModule,
    FinanceModule,
    CompanyModule,
  ],
})
export class AppModule {}
