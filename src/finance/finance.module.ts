import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { FinanceService } from './services/finance.service'
import { FinanceController } from './controllers/finance.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}
