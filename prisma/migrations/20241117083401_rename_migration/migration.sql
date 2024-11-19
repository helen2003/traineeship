/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- RenameEnum

ALTER TYPE "role" RENAME TO "RoleEnum";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_authorId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_categoryId_fkey";

-- RenameTable
ALTER TABLE "category" RENAME TO "Category";

-- RenameTable
ALTER TABLE "product" RENAME TO "Product";

-- RenameTable
ALTER TABLE "user" RENAME TO "User";

ALTER TABLE "Category" RENAME COLUMN "idCategory" TO "id";
ALTER TABLE "Category" RENAME COLUMN "nameCategory" TO "name";

ALTER TABLE "User" RENAME COLUMN "idUser" TO "id";

ALTER TABLE "Product" RENAME COLUMN "idProduct" TO "id";
ALTER TABLE "Product" RENAME COLUMN "nameProduct" TO "name";
ALTER TABLE "Product" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "Product" RENAME COLUMN "updateAt" TO "update_at";
ALTER TABLE "Product" RENAME COLUMN "deleteAt" TO "delete_at";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
