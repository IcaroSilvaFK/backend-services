import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common'
import { CreateFinanceInput } from '../dtos/create_finance_input.dto'
import { UpdateFinance } from '../dtos/update_finance_input.dto'

import { FinanceService } from '../services/finance.service'

@Controller('finances')
export class FinanceController {
  constructor(private readonly financeServices: FinanceService) {}

  @Post()
  async create(@Body() data: CreateFinanceInput) {
    return this.financeServices.createFinance(data)
  }

  @Get()
  async show() {
    return this.financeServices.listAllTransactions()
  }

  @Get(':id')
  async showOne(@Param('id') id: string) {
    return this.financeServices.listAllTransactionsById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateFinance) {
    return this.financeServices.updateFinance(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.financeServices.deleteFinance(id)
  }
}