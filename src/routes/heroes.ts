import { Router } from "express";
import { validateBody } from "../middlewares/validateBody";
import { createHeroSchema, updateHeroSchema } from "../validation/heroes";
import {
  createHeroController,
  getHeroesController,
  getHeroByIdController,
  deleteHeroController,
  updateHeroController,
} from "../controllers/heroes";
import { validateIdParams } from "../middlewares/validateParamsId";

const router = Router();

router.post("/", validateBody(createHeroSchema), createHeroController);
router.get("/", getHeroesController);
router.get("/:heroId", validateIdParams("heroId"), getHeroByIdController);
router.delete("/:heroId", validateIdParams("heroId"), deleteHeroController);
router.patch(
  "/:heroId",
  validateIdParams("heroId"),
  validateBody(updateHeroSchema),
  updateHeroController
);

export default router;
