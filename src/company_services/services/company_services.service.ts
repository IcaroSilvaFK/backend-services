import { Injectable } from '@nestjs/common'

import { PrismaProvider } from '../../database/providers/prisma.provider'

import { CreateServiceInput } from '../dtos/create_service_input.dto'
import { UpdateServiceInput } from '../dtos/update_service_input.dto'

@Injectable()
export class CompanyServices {
  constructor(private readonly prismaService: PrismaProvider) {}

  async createNewService(data: CreateServiceInput) {
    try {
      return await this.prismaService.services.create({ data })
    } catch (err) {
      console.log(err)
    }
  }

  async listAllServices() {
    try {
      return await this.prismaService.services.findMany()
    } catch (err) {
      console.log(err)
    }
  }

  async findServiceById(id: string) {
    try {
      return await this.prismaService.services.findFirst({
        where: { id },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async updateService(id: string, data: UpdateServiceInput) {
    try {
      return await this.prismaService.services.update({
        where: { id },
        data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  async deleteService(id: string) {
    try {
      await this.prismaService.services.delete({
        where: {
          id,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
}
