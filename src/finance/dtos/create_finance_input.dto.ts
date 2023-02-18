/* eslint-disable no-unused-vars */
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'

enum TRANSACTION_TYPE {
  WITHDRAW = 'WITHDRAW',
  DEPOSIT = 'DEPOSIT',
}

export class CreateFinanceInput {
  @IsString()
  @IsNotEmpty()
  public title: string

  @IsEnum(TRANSACTION_TYPE)
  @IsNotEmpty()
  public type: TRANSACTION_TYPE

  @IsNumber()
  @IsNotEmpty()
  public amount: number
}
