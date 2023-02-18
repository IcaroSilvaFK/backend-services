import { Injectable } from '@nestjs/common'

import { PrismaProvider } from '../../database/providers/prisma.provider'

import { CreateServiceInput } from '../dtos/create_service_input.dto'
import { UpdateServiceInput } from '../dtos/update_service_input.dto'

@Injectable()
export class CompanyServices {
  constructor(private readonly databaseService: PrismaProvider) {}

  async createNewService(data: CreateServiceInput) {
    try {
      const amount = data.value * 1_000
      const convertCreatedToDate = new Date(data.time)
      return await this.databaseService.services.create({
        data: {
          ...data,
          value: amount,
          time: convertCreatedToDate,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async listAllServices() {
    try {
      return await this.databaseService.services.findMany()
    } catch (err) {
      console.log(err)
    }
  }

  async findServiceById(id: string) {
    try {
      return await this.databaseService.services.findFirst({
        where: { id },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async updateService(id: string, data: UpdateServiceInput) {
    try {
      return await this.databaseService.services.update({
        where: { id },
        data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  async deleteService(id: string) {
    try {
      await this.databaseService.services.delete({
        where: {
          id,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
}
