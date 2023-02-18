import { Module } from '@nestjs/common'

import { ServicesModule } from './company_services/services.module'

@Module({
  imports: [ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
