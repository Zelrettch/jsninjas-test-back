import path from "node:path";
import fs from "node:fs/promises";
import { UPLOAD_DIR } from "../constants/index";
export const deleteImageFile = async (filename: string) => {
  try {
    const filePath = path.join(UPLOAD_DIR, filename);
    await fs.unlink(filePath);
  } catch (error) {
    throw new Error(`Failed to delete image file: ${filename}`);
  }
};
