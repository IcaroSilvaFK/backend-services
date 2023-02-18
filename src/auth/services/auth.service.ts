import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common'
import { verify } from 'argon2'
import { JwtService } from '@nestjs/jwt'

import { PrismaProvider } from '../../database/providers/prisma.provider'
import { CompanyServices } from '../../company/services/company.service'
import { CreateSessionInput } from '../dtos/create_session_input'
import { InternalServerErrorException } from '@nestjs/common/exceptions'

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: PrismaProvider,
    private readonly companyService: CompanyServices,
    private readonly jwtService: JwtService,
  ) {}

  async validateCompany(user: string, pass: string) {
    try {
      const company = await this.companyService.findByEmailOrCnpj(user)

      if (!company) {
        throw new BadRequestException()
      }

      const { password, ...rest } = company
      const isValidPass = await verify(password, pass)

      if (!isValidPass) {
        throw new UnauthorizedException()
      }

      return rest
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException(err)
    }
  }

  async login(company: CreateSessionInput) {
    try {
      const payload = { company: company.name, sub: company.id }

      const accessToken = this.jwtService.sign(payload)

      let token = await this.databaseService.refreshToken.findFirst({
        where: {
          companyId: company.id,
        },
        include: {
          company: {
            select: {
              cnpj: true,
              email: true,
              id: true,
              name: true,
            },
          },
        },
      })

      if (token) {
        token = await this.databaseService.refreshToken.update({
          where: {
            id: token.id,
          },
          data: {
            accessToken,
          },
          include: {
            company: {
              select: {
                cnpj: true,
                email: true,
                id: true,
                name: true,
              },
            },
          },
        })
      } else {
        token = await this.databaseService.refreshToken.create({
          data: {
            accessToken,
            companyId: company.id,
          },
          include: {
            company: {
              select: {
                cnpj: true,
                email: true,
                id: true,
                name: true,
              },
            },
          },
        })
      }

      return {
        access_token: token.accessToken,
        company: token.company,
      }
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException(err)
    }
  }

  async refreshToken(bearerToken: string) {
    try {
      const [, token] = bearerToken.split(' ')

      const verifyToken = await this.jwtService.verify(token)

      if (!verifyToken) {
        throw new UnauthorizedException()
      }

      const isEqualOldToken = await this.databaseService.refreshToken.findFirst(
        {
          where: {
            accessToken: token,
          },
          select: {
            id: true,
            company: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      )

      if (!isEqualOldToken) {
        throw new UnauthorizedException()
      }

      const { company } = isEqualOldToken

      const payload = { company: company.name, sub: company.id }
      const newAccessToken = this.jwtService.sign(payload)

      await this.databaseService.refreshToken.update({
        where: {
          id: isEqualOldToken.id,
        },
        data: {
          accessToken: newAccessToken,
        },
      })

      return {
        access_token: newAccessToken,
      }
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException(err)
    }
  }
}
