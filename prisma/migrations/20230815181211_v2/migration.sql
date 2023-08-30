/*
  Warnings:

  - You are about to drop the column `salesTransactionId` on the `Item_transaction` table. All the data in the column will be lost.
  - You are about to drop the column `customerTypeId` on the `Sales_transaction` table. All the data in the column will be lost.
  - Added the required column `sales_transaction_id` to the `Item_transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_type_id` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Item_transaction` DROP FOREIGN KEY `Item_transaction_salesTransactionId_fkey`;

-- DropForeignKey
ALTER TABLE `Sales_transaction` DROP FOREIGN KEY `Sales_transaction_customerTypeId_fkey`;

-- AlterTable
ALTER TABLE `Item_transaction` DROP COLUMN `salesTransactionId`,
    ADD COLUMN `sales_transaction_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Sales_transaction` DROP COLUMN `customerTypeId`,
    ADD COLUMN `customer_type_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Sales_transaction` ADD CONSTRAINT `Sales_transaction_customer_type_id_fkey` FOREIGN KEY (`customer_type_id`) REFERENCES `Customer_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_transaction` ADD CONSTRAINT `Item_transaction_sales_transaction_id_fkey` FOREIGN KEY (`sales_transaction_id`) REFERENCES `Sales_transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
