import { Router } from "express";
import { upload } from "../middlewares/multer";
import {
  uploadImageController,
  deleteImageController,
} from "../controllers/images";
import { validateBody } from "../middlewares/validateBody";
import { uploadImageSchema } from "../validation/images";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  validateBody(uploadImageSchema),
  uploadImageController
);

router.delete("/:imageName", deleteImageController);

export default router;
