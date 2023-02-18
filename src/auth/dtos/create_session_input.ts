import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateSessionInput {
  @IsString()
  @IsNotEmpty()
  public id: string

  @IsString()
  @IsNotEmpty()
  public name: string

  @IsString()
  @IsNotEmpty()
  public cnpj: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string
}
