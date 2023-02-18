/*
  Warnings:

  - Added the required column `company_id` to the `refreshtoken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refreshtoken" ADD COLUMN     "company_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "refreshtoken" ADD CONSTRAINT "refreshtoken_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
