/*
  Warnings:

  - Added the required column `cash_back` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sales_transaction` ADD COLUMN `cash_back` INTEGER NOT NULL;
