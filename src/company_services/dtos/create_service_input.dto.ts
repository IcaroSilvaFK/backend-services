import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
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

  @IsString()
  @IsNotEmpty()
  public time: string
}
