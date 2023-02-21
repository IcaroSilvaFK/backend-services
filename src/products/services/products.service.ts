import { Injectable } from '@nestjs/common'

import { PrismaProvider } from '../../database/providers/prisma.provider'
import { CreateProductInput } from '../dtos/create_product_input.dto'
import { UpdateProductInput } from '../dtos/update_product_input.dto'

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: PrismaProvider) {}

  async createNewProduct(product: CreateProductInput) {
    try {
      return await this.databaseService.product.create({
        data: {
          title: product.title,
          quantity: product.quantity,
          amount: product.amount * 1_000,
          companyId: product.companyId,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async showProductByCompanyId(companyId: string) {
    try {
      return await this.databaseService.product.findMany({
        where: {
          companyId,
          AND: {
            quantity: {
              gt: 0,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async showProductByTitle(companyId: string, title: string) {
    try {
      return await this.databaseService.product.findMany({
        where: {
          companyId,
          AND: {
            title: {
              contains: title,
            },
            AND: {
              quantity: {
                gt: 0,
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async updateProduct(id: string, data: UpdateProductInput) {
    try {
      return await this.databaseService.product.update({
        where: { id },
        data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  async deleteProduct(id: string) {
    try {
      await this.databaseService.product.delete({
        where: { id },
      })
    } catch (err) {
      console.log(err)
    }
  }
}
