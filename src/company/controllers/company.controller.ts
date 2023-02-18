import {
  Controller,
  Post,
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common'

import { CompanyServices } from '../services/company.service'
import { CreateCompanyInput } from '../dtos/create_company_input.dto'
import { UpdateCompanyInput } from '../dtos/update_company_input.dto'
import { HttpStatus } from '@nestjs/common/enums'
import { AuthGuard } from '@nestjs/passport'

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyServices) {}

  @Post()
  async createCompany(@Body() data: CreateCompanyInput) {
    return this.companyService.createCompany(data)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/list/all')
  async showAll() {
    return this.companyService.showAll()
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCompanyInput) {
    return this.companyService.update(id, data)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.companyService.delete(id)
  }
}
