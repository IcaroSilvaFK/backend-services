/* eslint-disable no-unused-vars */
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

enum TRANSACTION_TYPE {
  WITHDRAW = 'WITHDRAW',
  DEPOSIT = 'DEPOSIT',
}

export class CreateFinanceInput {
  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsOptional()
  public description: string

  @IsEnum(TRANSACTION_TYPE)
  @IsNotEmpty()
  public type: TRANSACTION_TYPE

  @IsString()
  @IsNotEmpty()
  public companyId: string

  @IsNumber()
  @IsNotEmpty()
  public amount: number
}
