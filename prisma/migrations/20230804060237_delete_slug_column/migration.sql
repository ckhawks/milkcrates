/*
  Warnings:

  - You are about to drop the column `slug` on the `Crate` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Crate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Crate" ("id", "name") SELECT "id", "name" FROM "Crate";
DROP TABLE "Crate";
ALTER TABLE "new_Crate" RENAME TO "Crate";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
