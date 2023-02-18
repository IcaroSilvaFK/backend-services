"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceService = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const prisma_provider_1 = require("../../database/providers/prisma.provider");
let FinanceService = class FinanceService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async createFinance(data) {
        try {
            const amount = data.amount * 1000;
            return await this.databaseService.transactions.create({
                data: Object.assign(Object.assign({}, data), { amount }),
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async listAllTransactions() {
        try {
            return await this.databaseService.transactions.findMany();
        }
        catch (err) {
            console.log(err);
        }
    }
    async listAllTransactionsById(id) {
        try {
            return await this.databaseService.transactions.findFirst({
                where: {
                    id,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async listTransactionToDay() {
        try {
            const startDay = dayjs().startOf('day').toDate();
            const endDay = dayjs().endOf('day').toDate();
            console.log({
                startDay,
                endDay,
            });
            const listAllTransactionsToDay = await this.databaseService.transactions.findMany({
                where: {
                    createdAt: {
                        gte: startDay,
                        lte: endDay,
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
            return listAllTransactionsToDay;
        }
        catch (err) {
            console.log(err);
        }
    }
    async updateFinance(id, data) {
        try {
            return await this.databaseService.transactions.update({
                where: {
                    id,
                },
                data,
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteFinance(id) {
        try {
            return await this.databaseService.transactions.delete({
                where: {
                    id,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
FinanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_provider_1.PrismaProvider])
], FinanceService);
exports.FinanceService = FinanceService;
//# sourceMappingURL=finance.service.js.map