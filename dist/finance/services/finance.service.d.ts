import { CreateFinanceInput } from '../dtos/create_finance_input.dto';
import { UpdateFinance } from '../dtos/update_finance_input.dto';
import { PrismaProvider } from '../../database/providers/prisma.provider';
export declare class FinanceService {
    private readonly prismaService;
    constructor(prismaService: PrismaProvider);
    createFinance(data: CreateFinanceInput): Promise<import(".prisma/client").Transactions>;
    listAllTransactions(): Promise<import(".prisma/client").Transactions[]>;
    listAllTransactionsById(id: string): Promise<import(".prisma/client").Transactions>;
    listTransactionToDay(): Promise<import(".prisma/client").Transactions[]>;
    updateFinance(id: string, data: UpdateFinance): Promise<import(".prisma/client").Transactions>;
    deleteFinance(id: string): Promise<import(".prisma/client").Transactions>;
}
