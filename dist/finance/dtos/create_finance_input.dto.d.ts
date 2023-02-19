declare enum TRANSACTION_TYPE {
    WITHDRAW = "WITHDRAW",
    DEPOSIT = "DEPOSIT"
}
export declare class CreateFinanceInput {
    title: string;
    description: string;
    type: TRANSACTION_TYPE;
    companyId: string;
    amount: number;
}
export {};
