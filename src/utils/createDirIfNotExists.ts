import { PathLike } from "node:fs";
import fs from "node:fs/promises";

export const createDirIfNotExists = async (url: PathLike) => {
  try {
    await fs.access(url);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await fs.mkdir(url);
    }
  }
};
