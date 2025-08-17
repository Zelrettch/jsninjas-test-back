/*
  Warnings:

  - You are about to drop the column `nick_name` on the `Superhero` table. All the data in the column will be lost.
  - Added the required column `nickname` to the `Superhero` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Superhero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT NOT NULL,
    "real_name" TEXT NOT NULL,
    "origin_description" TEXT NOT NULL,
    "superpowers" TEXT NOT NULL,
    "catch_phrase" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Superhero" ("catch_phrase", "createdAt", "id", "origin_description", "real_name", "superpowers", "updatedAt") SELECT "catch_phrase", "createdAt", "id", "origin_description", "real_name", "superpowers", "updatedAt" FROM "Superhero";
DROP TABLE "Superhero";
ALTER TABLE "new_Superhero" RENAME TO "Superhero";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
