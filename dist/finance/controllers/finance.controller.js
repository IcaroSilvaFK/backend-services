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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceController = void 0;
const common_1 = require("@nestjs/common");
const create_finance_input_dto_1 = require("../dtos/create_finance_input.dto");
const update_finance_input_dto_1 = require("../dtos/update_finance_input.dto");
const finance_service_1 = require("../services/finance.service");
let FinanceController = class FinanceController {
    constructor(financeServices) {
        this.financeServices = financeServices;
    }
    async create(data) {
        return this.financeServices.createFinance(data);
    }
    async show() {
        return this.financeServices.listAllTransactions();
    }
    async showOne(id) {
        return this.financeServices.listAllTransactionsById(id);
    }
    async update(id, data) {
        return this.financeServices.updateFinance(id, data);
    }
    async delete(id) {
        return this.financeServices.deleteFinance(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_finance_input_dto_1.CreateFinanceInput]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "show", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "showOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_finance_input_dto_1.UpdateFinance]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "delete", null);
FinanceController = __decorate([
    (0, common_1.Controller)('finances'),
    __metadata("design:paramtypes", [finance_service_1.FinanceService])
], FinanceController);
exports.FinanceController = FinanceController;
//# sourceMappingURL=finance.controller.js.map