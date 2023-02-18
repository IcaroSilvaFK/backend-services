import { CompanyServices } from '../services/company_services.service';
import { CreateServiceInput } from '../dtos/create_service_input.dto';
import { UpdateServiceInput } from '../dtos/update_service_input.dto';
export declare class CompanyServicesController {
    private readonly companyService;
    constructor(companyService: CompanyServices);
    create(data: CreateServiceInput): Promise<import(".prisma/client").Services>;
    listAll(): Promise<import(".prisma/client").Services[]>;
    findBydId(id: string): Promise<import(".prisma/client").Services>;
    update(id: string, data: UpdateServiceInput): Promise<import(".prisma/client").Services>;
    delete(id: string): Promise<void>;
}
