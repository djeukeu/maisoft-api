/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `discount` DECIMAL(65, 30) NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `product_name_key` ON `product`(`name`);
