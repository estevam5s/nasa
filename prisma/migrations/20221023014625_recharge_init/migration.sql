/*
  Warnings:

  - The primary key for the `Recarga` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Recarga" DROP CONSTRAINT "Recarga_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "stationID" DROP DEFAULT,
ADD CONSTRAINT "Recarga_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Recarga_stationID_seq";
