import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CreateFinanceInput } from '../dtos/create_finance_input.dto'
import { UpdateFinance } from '../dtos/update_finance_input.dto'

import { FinanceService } from '../services/finance.service'

@Controller('finances')
export class FinanceController {
  constructor(private readonly financeServices: FinanceService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() data: CreateFinanceInput) {
    return this.financeServices.createFinance(data)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/all/:companyId')
  async show(@Param('companyId') id: string) {
    return this.financeServices.listAllTransactions(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async showOne(@Param('id') id: string) {
    console.log('showOne')
    return this.financeServices.listAllTransactionsById(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('today/all/:companyId')
  async showTransactionToDay(@Param('companyId') id: string) {
    return this.financeServices.listTransactionToDay(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateFinance) {
    return this.financeServices.updateFinance(id, data)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.financeServices.deleteFinance(id)
  }
}
