-- CreateTable
CREATE TABLE "Crate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bottle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "author" TEXT,
    "crateId" INTEGER NOT NULL,
    CONSTRAINT "Bottle_crateId_fkey" FOREIGN KEY ("crateId") REFERENCES "Crate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
