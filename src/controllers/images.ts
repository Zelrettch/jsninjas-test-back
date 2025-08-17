import e, { Request, Response } from "express";
import createHttpError from "http-errors";
import { ImageData } from "../validation/images";
import { saveFileToUploadDir } from "../utils/saveFileToUploadDir";
import { addImage, deleteImage } from "../services/images";
export async function uploadImageController(
  req: Request<{}, {}, ImageData.Upload>,
  res: Response
) {
  if (!req.file) {
    throw createHttpError(400, "Image is required");
  }
  const heroId = Number(req.body.heroId);
  const image = req.file;
  await saveFileToUploadDir(req.file);
  await addImage(heroId, image);
  res.status(201).json({
    status: 201,
    message: "Image uploaded successfully",
    data: {
      imageURL: `${process.env.APP_DOMAIN}/images/${image.filename}`,
    },
  });
}

export async function deleteImageController(
  req: Request<{ imageName: string }>,
  res: Response
) {
  const imageName = req.params.imageName;
  await deleteImage(imageName);
  res.status(204).send();
}
