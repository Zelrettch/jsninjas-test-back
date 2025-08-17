import path from "node:path";
import fs from "node:fs/promises";
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from "../constants/index";

export const saveFileToUploadDir = async (file: Express.Multer.File) => {
  await fs.rename(
    path.join(TEMP_UPLOAD_DIR, file.filename),
    path.join(UPLOAD_DIR, file.filename)
  );
  return file.filename;
};
