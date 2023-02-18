import { PrismaProvider } from '../../database/providers/prisma.provider';
import { CreateServiceInput } from '../dtos/create_service_input.dto';
import { UpdateServiceInput } from '../dtos/update_service_input.dto';
export declare class CompanyServices {
    private readonly prismaService;
    constructor(prismaService: PrismaProvider);
    createNewService(data: CreateServiceInput): Promise<import(".prisma/client").Services>;
    listAllServices(): Promise<import(".prisma/client").Services[]>;
    findServiceById(id: string): Promise<import(".prisma/client").Services>;
    updateService(id: string, data: UpdateServiceInput): Promise<import(".prisma/client").Services>;
    deleteService(id: string): Promise<void>;
}
