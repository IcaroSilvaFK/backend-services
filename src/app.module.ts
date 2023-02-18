import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ServicesModule } from './company_services/services.module'

@Module({
  imports: [ConfigModule.forRoot(), ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
