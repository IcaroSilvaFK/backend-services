import { CreateFinanceInput } from '../dtos/create_finance_input.dto';
import { UpdateFinance } from '../dtos/update_finance_input.dto';
import { FinanceService } from '../services/finance.service';
export declare class FinanceController {
    private readonly financeServices;
    constructor(financeServices: FinanceService);
    create(data: CreateFinanceInput): Promise<import(".prisma/client").Transactions>;
    show(): Promise<import(".prisma/client").Transactions[]>;
    showOne(id: string): Promise<import(".prisma/client").Transactions>;
    showTransactionToDay(): Promise<import(".prisma/client").Transactions[]>;
    update(id: string, data: UpdateFinance): Promise<import(".prisma/client").Transactions>;
    delete(id: string): Promise<import(".prisma/client").Transactions>;
}
