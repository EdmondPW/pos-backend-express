/*
  Warnings:

  - You are about to drop the column `productId` on the `Item_transaction` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Item_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Item_transaction` DROP FOREIGN KEY `Item_transaction_productId_fkey`;

-- AlterTable
ALTER TABLE `Item_transaction` DROP COLUMN `productId`,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Item_transaction` ADD CONSTRAINT `Item_transaction_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
