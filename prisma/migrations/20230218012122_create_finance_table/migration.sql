-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('WITHDRAW', 'DEPOSIT');

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
