import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateCompanyInput {
  @IsString()
  @IsNotEmpty()
  public name: string

  @IsString()
  @IsNotEmpty()
  // @Matches(regexHelper.cnpj)
  public cnpj: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'password must contain at least 6 characters' })
  // @Matches(regexHelper.password)
  public password: string

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string
}
