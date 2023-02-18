import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { AuthService } from '../services/auth.service'

// import { CreateSessionInput } from '../dtos/create_session_input'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/session')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/session/refresh')
  async refreshSession(@Request() req) {
    const authorizationHeader = req.headers.authorization

    return this.authService.refreshToken(authorizationHeader)
  }
}
