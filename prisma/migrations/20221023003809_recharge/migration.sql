-- CreateTable
CREATE TABLE "Recarga" (
    "stationID" SERIAL NOT NULL,
    "usuario" TEXT NOT NULL,
    "inicio_recarga" TIMESTAMP(3) NOT NULL,
    "fin_recarga" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recarga_pkey" PRIMARY KEY ("stationID")
);
