-- CreateTable
CREATE TABLE "Superhero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nick_name" TEXT NOT NULL,
    "real_name" TEXT NOT NULL,
    "origin_description" TEXT NOT NULL,
    "superpowers" TEXT NOT NULL,
    "catch_phrase" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "superheroId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Photo_superheroId_fkey" FOREIGN KEY ("superheroId") REFERENCES "Superhero" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
