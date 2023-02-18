import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { DatabaseModule } from '../database/database.module'
import { CompanyModule } from '../company/company.module'

import { AuthService } from './services/auth.service'
import { LocalStrategy } from './strategies/local.strategy'
import { jwtConstants } from 'src/constants/constants_util'
import { AuthController } from './controllers/auth.controller'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1hours' },
    }),
    PassportModule,
    DatabaseModule,
    CompanyModule,
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, AuthService, JwtStrategy],
})
export class AuthModule {}
