import { PartialType } from '@nestjs/mapped-types'
import { CreateProductInput } from './create_product_input.dto'

export class UpdateProductInput extends PartialType(CreateProductInput) {}
