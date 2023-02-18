import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
  IsDate,
} from 'class-validator'

export class CreateServiceInput {
  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsOptional()
  public description: string

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  public value: number

  @IsString()
  @IsOptional()
  public comments: string

  @IsDate()
  @IsNotEmpty()
  public time: Date
}
