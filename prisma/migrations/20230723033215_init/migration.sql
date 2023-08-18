/*
  Warnings:

  - Made the column `notes` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `active` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "notes" SET NOT NULL,
DROP COLUMN "active",
ADD COLUMN     "active" BOOLEAN NOT NULL;
