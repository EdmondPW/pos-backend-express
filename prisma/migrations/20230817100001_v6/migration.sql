/*
  Warnings:

  - You are about to drop the column `total_paid` on the `Sales_transaction` table. All the data in the column will be lost.
  - Added the required column `total_paid_cash` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_paid_debit` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_paid_transfer` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sales_transaction` DROP COLUMN `total_paid`,
    ADD COLUMN `total_paid_cash` INTEGER NOT NULL,
    ADD COLUMN `total_paid_debit` INTEGER NOT NULL,
    ADD COLUMN `total_paid_transfer` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `refresh_token` VARCHAR(255) NULL;
