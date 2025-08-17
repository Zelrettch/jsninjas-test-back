import { Router } from "express";
import heroesRouter from "./heroes";
import imagesRouter from "./images";

const router = Router();

router.use("/heroes", heroesRouter);
router.use("/images", imagesRouter);
export default router;
