-- CreateTable
CREATE TABLE "Element" (
    "id" TEXT NOT NULL,
    "elementName" TEXT NOT NULL,
    "atomicNumber" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "Element_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "projectCode" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "startDate"   DATE NOT NULL,
    "endDate"     DATE NOT NULL,
    "notes"       TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "Element_atomicNumber_key" ON "Element"("atomicNumber");
