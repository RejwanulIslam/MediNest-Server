/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "categorieName" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicines" (
    "id" TEXT NOT NULL,
    "medicineName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT,
    "stock" INTEGER NOT NULL,
    "detels" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "categorieId" TEXT NOT NULL,

    CONSTRAINT "Medicines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Medicines" ADD CONSTRAINT "Medicines_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
