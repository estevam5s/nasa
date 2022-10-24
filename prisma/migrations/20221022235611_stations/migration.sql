/*
  Warnings:

  - You are about to drop the column `planetId` on the `Station` table. All the data in the column will be lost.
  - You are about to drop the `Planet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `planetName` to the `Station` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Station" DROP CONSTRAINT "Station_planetId_fkey";

-- AlterTable
ALTER TABLE "Station" DROP COLUMN "planetId",
ADD COLUMN     "planetName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Planet";
