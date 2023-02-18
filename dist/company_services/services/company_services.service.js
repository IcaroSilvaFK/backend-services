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
exports.CompanyServices = void 0;
const common_1 = require("@nestjs/common");
const prisma_provider_1 = require("../../database/providers/prisma.provider");
let CompanyServices = class CompanyServices {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async createNewService(data) {
        try {
            const amount = data.value * 1000;
            const convertCreatedToDate = new Date(data.time);
            return await this.databaseService.services.create({
                data: Object.assign(Object.assign({}, data), { value: amount, time: convertCreatedToDate }),
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async listAllServices() {
        try {
            return await this.databaseService.services.findMany();
        }
        catch (err) {
            console.log(err);
        }
    }
    async findServiceById(id) {
        try {
            return await this.databaseService.services.findFirst({
                where: { id },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async updateService(id, data) {
        try {
            return await this.databaseService.services.update({
                where: { id },
                data,
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteService(id) {
        try {
            await this.databaseService.services.delete({
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
CompanyServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_provider_1.PrismaProvider])
], CompanyServices);
exports.CompanyServices = CompanyServices;
//# sourceMappingURL=company_services.service.js.map