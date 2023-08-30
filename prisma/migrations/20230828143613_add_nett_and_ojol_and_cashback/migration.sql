/*
  Warnings:

  - Added the required column `total_nett` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_paid_ojol` to the `Sales_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sales_transaction` ADD COLUMN `total_nett` INTEGER NOT NULL,
    ADD COLUMN `total_paid_ojol` INTEGER NOT NULL;
