import { PartialType } from '@nestjs/mapped-types'
import { CreateCompanyInput } from './create_company_input.dto'

export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {}
