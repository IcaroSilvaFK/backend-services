import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaProvider } from '../../database/providers/prisma.provider'

import { CreateCompanyInput } from '../dtos/create_company_input.dto'
import { UpdateCompanyInput } from '../dtos/update_company_input.dto'

@Injectable()
export class CompanyServices {
  constructor(private readonly databaseService: PrismaProvider) {}

  async createCompany(data: CreateCompanyInput) {
    try {
      const passHashed = await hash(data.password)

      return await this.databaseService.companys.create({
        data: {
          ...data,
          password: passHashed,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async showAll() {
    try {
      return await this.databaseService.companys.findMany()
    } catch (err) {
      console.log(err)
    }
  }

  async findByEmailOrCnpj(emailOrCnpj: string) {
    try {
      return await this.databaseService.companys.findFirst({
        where: {
          email: emailOrCnpj,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async update(id: string, data: UpdateCompanyInput) {
    try {
      return await this.databaseService.companys.update({
        where: {
          id,
        },
        data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  async delete(id: string) {
    try {
      return await this.databaseService.companys.delete({
        where: {
          id,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
}
