/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailId` on the `Superhero` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "superheroId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Image_superheroId_fkey" FOREIGN KEY ("superheroId") REFERENCES "Superhero" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("createdAt", "name", "superheroId", "updatedAt") SELECT "createdAt", "name", "superheroId", "updatedAt" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE UNIQUE INDEX "Image_name_key" ON "Image"("name");
CREATE TABLE "new_Superhero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT NOT NULL,
    "real_name" TEXT NOT NULL,
    "origin_description" TEXT NOT NULL,
    "superpowers" TEXT NOT NULL,
    "catch_phrase" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "thumbnailName" TEXT,
    CONSTRAINT "Superhero_thumbnailName_fkey" FOREIGN KEY ("thumbnailName") REFERENCES "Image" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Superhero" ("catch_phrase", "createdAt", "id", "nickname", "origin_description", "real_name", "superpowers", "updatedAt") SELECT "catch_phrase", "createdAt", "id", "nickname", "origin_description", "real_name", "superpowers", "updatedAt" FROM "Superhero";
DROP TABLE "Superhero";
ALTER TABLE "new_Superhero" RENAME TO "Superhero";
CREATE UNIQUE INDEX "Superhero_thumbnailName_key" ON "Superhero"("thumbnailName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
