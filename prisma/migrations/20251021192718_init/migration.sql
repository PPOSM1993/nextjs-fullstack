/*
  Warnings:

  - You are about to drop the column `creatAt` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Product_creatAt_idx";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "creatAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "Product_createdAt_idx" ON "Product"("createdAt");
