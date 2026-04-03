/*
  Warnings:

  - You are about to drop the column `productId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `shippindAddress` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `shippingAddress` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_productId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "productId",
DROP COLUMN "shippindAddress",
ADD COLUMN     "shippingAddress" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
