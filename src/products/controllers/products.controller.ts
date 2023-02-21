import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { CreateProductInput } from '../dtos/create_product_input.dto'
import { UpdateProductInput } from '../dtos/update_product_input.dto'

import { ProductsService } from '../services/products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() product: CreateProductInput) {
    return await this.productsService.createNewProduct(product)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':companyId')
  async find(@Param('companyId') id: string, @Query('title') title: string) {
    if (title) {
      return this.productsService.showProductByTitle(id, title)
    }
    return await this.productsService.showProductByCompanyId(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateProductInput) {
    return this.productsService.updateProduct(id, data)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.productsService.deleteProduct(id)
  }
}
