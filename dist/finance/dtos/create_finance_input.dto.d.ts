declare enum TRANSACTION_TYPE {
    WITHDRAW = "WITHDRAW",
    DEPOSIT = "DEPOSIT"
}
export declare class CreateFinanceInput {
    title: string;
    type: TRANSACTION_TYPE;
    amount: number;
}
export {};
