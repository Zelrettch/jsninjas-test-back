import prisma from "../utils/prismaClient";
import { deleteImageFile } from "../utils/deleteImageFile";
export const addImage = async (heroId: number, file: Express.Multer.File) => {
  console.log(heroId);
  await prisma.image.create({
    data: {
      name: file.filename,
      superhero: {
        connect: {
          id: heroId,
        },
      },
    },
  });
};

export const deleteImage = async (name: string) => {
  await prisma.image.deleteMany({
    where: { name },
  });
  await deleteImageFile(name);
};
