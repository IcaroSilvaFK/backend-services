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
exports.CompanyServicesController = void 0;
const common_1 = require("@nestjs/common");
const company_services_service_1 = require("../services/company_services.service");
const create_service_input_dto_1 = require("../dtos/create_service_input.dto");
const update_service_input_dto_1 = require("../dtos/update_service_input.dto");
const passport_1 = require("@nestjs/passport");
let CompanyServicesController = class CompanyServicesController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async create(data) {
        return await this.companyService.createNewService(data);
    }
    async listAll() {
        return this.companyService.listAllServices();
    }
    async findBydId(id) {
        return this.companyService.findServiceById(id);
    }
    async update(id, data) {
        return this.companyService.updateService(id, data);
    }
    async delete(id) {
        return this.companyService.deleteService(id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_input_dto_1.CreateServiceInput]),
    __metadata("design:returntype", Promise)
], CompanyServicesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyServicesController.prototype, "listAll", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyServicesController.prototype, "findBydId", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_input_dto_1.UpdateServiceInput]),
    __metadata("design:returntype", Promise)
], CompanyServicesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyServicesController.prototype, "delete", null);
CompanyServicesController = __decorate([
    (0, common_1.Controller)('/services'),
    __metadata("design:paramtypes", [company_services_service_1.CompanyServices])
], CompanyServicesController);
exports.CompanyServicesController = CompanyServicesController;
//# sourceMappingURL=company_services.controller.js.map