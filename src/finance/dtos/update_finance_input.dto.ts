import { PartialType } from '@nestjs/mapped-types'
import { CreateFinanceInput } from './create_finance_input.dto'

export class UpdateFinance extends PartialType(CreateFinanceInput) {}
