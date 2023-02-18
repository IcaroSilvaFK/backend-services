-- CreateTable
CREATE TABLE "companys" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "companys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "companys_cnpj_email_idx" ON "companys"("cnpj", "email");
