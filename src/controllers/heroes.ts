import { Request, Response } from "express";
import { getHeroesParamsSchema, HeroData } from "../validation/heroes";
import {
  createHero,
  deleteHero,
  getHeroById,
  getHeroes,
  updateHero,
} from "../services/heroes";

export async function createHeroController(
  req: Request<{}, {}, HeroData.Create>,
  res: Response
) {
  const data = req.body;
  const hero = await createHero(data);
  res.status(201).json({
    status: 201,
    message: "Hero created successfully",
    data: hero,
  });
}

export async function getHeroesController(req: Request, res: Response) {
  const parsedPage = Number(getHeroesParamsSchema.parse(req.query).page);
  const heroes = await getHeroes(parsedPage);
  res.status(200).json({
    status: 200,
    message: "Successfully fetched heroes",
    data: heroes,
  });
}

export async function getHeroByIdController(
  req: Request<{ heroId: string }>,
  res: Response
) {
  const id = Number(req.params.heroId);
  const hero = await getHeroById(id);
  res.status(200).json({
    status: 200,
    message: "Successfully fetched hero with id " + id,
    data: hero,
  });
}

export async function deleteHeroController(
  req: Request<{ heroId: string }>,
  res: Response
) {
  const id = Number(req.params.heroId);
  await deleteHero(id);
  res.status(204).send();
}

export async function updateHeroController(
  req: Request<{ heroId: string }, {}, HeroData.Update>,
  res: Response
) {
  const id = Number(req.params.heroId);
  const data = req.body;
  const updatedHero = await updateHero(id, data);
  res.status(200).json({
    status: 201,
    message: "Successfull hero update",
    data: updatedHero,
  });
}
