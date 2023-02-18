-- CreateTable
CREATE TABLE "refreshtoken" (
    "id" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refreshtoken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "refreshtoken_access_token_idx" ON "refreshtoken"("access_token");
