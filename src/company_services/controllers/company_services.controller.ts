import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'

import { CompanyServices } from '../services/company_services.service'

import { CreateServiceInput } from '../dtos/create_service_input.dto'
import { UpdateServiceInput } from '../dtos/update_service_input.dto'

@Controller('/services')
export class CompanyServicesController {
  constructor(private readonly companyService: CompanyServices) {}

  @Post()
  async create(@Body() data: CreateServiceInput) {
    return await this.companyService.createNewService(data)
  }

  @Get()
  async listAll() {
    return this.companyService.listAllServices()
  }

  @Get(':id')
  async findBydId(@Param('id') id: string) {
    return this.companyService.findServiceById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateServiceInput) {
    return this.companyService.updateService(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.companyService.deleteService(id)
  }
}
