-- DropIndex
DROP INDEX "refreshtoken_access_token_idx";

-- CreateIndex
CREATE INDEX "refreshtoken_access_token_company_id_idx" ON "refreshtoken"("access_token", "company_id");
