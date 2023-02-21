import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator'

export class CreateProductInput {
  @IsString()
  @IsNotEmpty()
  public title: string

  @IsNumber()
  @IsNotEmpty()
  public quantity: number

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  public amount: number

  @IsString()
  @IsNotEmpty()
  public companyId: string
}
