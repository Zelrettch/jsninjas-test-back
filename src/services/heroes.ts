import { getHeroesParamsSchema, HeroData } from "../validation/heroes";
import prisma from "../utils/prismaClient";
import { PAGE_SIZE } from "../constants";
import { deleteImageFile } from "../utils/deleteImageFile";

export const createHero = async (data: HeroData.Create) => {
  return await prisma.superhero.create({
    data: {
      ...data,
      thumbnail: {
        connect: data.thumbnail
          ? {
              name: data.thumbnail,
            }
          : undefined,
      },
    },
  });
};

export const getHeroes = async (page: number) => {
  const [heroes, totalHeroes] = await Promise.all([
    prisma.superhero.findMany({
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      select: {
        id: true,
        nickname: true,
        thumbnailName: true,
      },
    }),
    prisma.superhero.count(),
  ]);
  return { heroes, page, totalPages: Math.ceil(totalHeroes / PAGE_SIZE) };
};

export const getHeroById = async (id: number) => {
  const item = await prisma.superhero.findUniqueOrThrow({
    where: { id },
    include: { images: true },
  });
  const { images, ...hero } = item;
  return { ...hero, images: images.map((image) => image.name) };
};

export const deleteHero = async (id: number) => {
  const deleted = await prisma.superhero.delete({
    where: { id },
    select: {
      images: true,
    },
  });
  console.log(deleted);
  deleted.images.forEach(async (image) => {
    await deleteImageFile(image.name);
  });
};

export const updateHero = async (id: number, data: HeroData.Update) => {
  return await prisma.superhero.update({
    where: { id },
    data: {
      ...data,
      thumbnail: data.thumbnail
        ? {
            connect: {
              name: data.thumbnail,
            },
          }
        : undefined,
    },
  });
};
