/*
  Warnings:

  - You are about to drop the column `userId` on the `Sales_transaction` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Sales_transaction` DROP FOREIGN KEY `Sales_transaction_userId_fkey`;

-- AlterTable
ALTER TABLE `Sales_transaction` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Sales_transaction` ADD CONSTRAINT `Sales_transaction_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
