/*
  Warnings:

  - Added the required column `countryCode` to the `Trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trips" ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false;
