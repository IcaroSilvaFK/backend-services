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
  UseGuards,
} from '@nestjs/common'

import { CompanyServices } from '../services/company_services.service'

import { CreateServiceInput } from '../dtos/create_service_input.dto'
import { UpdateServiceInput } from '../dtos/update_service_input.dto'
import { AuthGuard } from '@nestjs/passport'

@Controller('/services')
export class CompanyServicesController {
  constructor(private readonly companyService: CompanyServices) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() data: CreateServiceInput) {
    return await this.companyService.createNewService(data)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async listAll() {
    return this.companyService.listAllServices()
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findBydId(@Param('id') id: string) {
    return this.companyService.findServiceById(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateServiceInput) {
    return this.companyService.updateService(id, data)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.companyService.deleteService(id)
  }
}
