-- CreateEnum
CREATE TYPE "role" AS ENUM ('USER', 'SELLER', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "idUser" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "name" TEXT,
    "role" "role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "product" (
    "idProduct" SERIAL NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "deleteAt" TIMESTAMP(3),
    "authorId" INTEGER,
    "categoryId" INTEGER,

    CONSTRAINT "product_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "category" (
    "idCategory" SERIAL NOT NULL,
    "nameCategory" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("idCategory")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("idCategory") ON DELETE SET NULL ON UPDATE CASCADE;
