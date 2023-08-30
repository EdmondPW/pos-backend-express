/*
  Warnings:

  - Added the required column `total_paid_credit` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sales_transaction` ADD COLUMN `total_paid_credit` INTEGER NOT NULL;
