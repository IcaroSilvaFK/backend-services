import { Injectable } from '@nestjs/common'
import * as dayjs from 'dayjs'

import { CreateFinanceInput } from '../dtos/create_finance_input.dto'
import { UpdateFinance } from '../dtos/update_finance_input.dto'

import { PrismaProvider } from '../../database/providers/prisma.provider'

@Injectable()
export class FinanceService {
  constructor(private readonly databaseService: PrismaProvider) {}

  async createFinance(data: CreateFinanceInput) {
    try {
      const amount = data.amount * 1_000

      return await this.databaseService.transactions.create({
        data: {
          ...data,
          amount,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async listAllTransactions(companyId: string) {
    try {
      return await this.databaseService.transactions.findMany({
        where: {
          companyId,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async listAllTransactionsById(id: string) {
    try {
      return await this.databaseService.transactions.findFirst({
        where: {
          id,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  async listTransactionToDay(companyId: string) {
    try {
      const startDay = dayjs().startOf('day').toDate()
      const endDay = dayjs().endOf('day').toDate()
      console.log({
        startDay,
        endDay,
      })
      const listAllTransactionsToDay =
        await this.databaseService.transactions.findMany({
          where: {
            companyId,
            AND: {
              createdAt: {
                gte: startDay,
                lte: endDay,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        })

      return listAllTransactionsToDay
    } catch (err) {
      console.log(err)
    }
  }

  async updateFinance(id: string, data: UpdateFinance) {
    try {
      return await this.databaseService.transactions.update({
        where: {
          id,
        },
        data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  async deleteFinance(id: string) {
    try {
      return await this.databaseService.transactions.delete({
        where: {
          id,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
}
