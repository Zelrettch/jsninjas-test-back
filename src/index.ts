import { create } from "node:domain";
import { setupServer } from "./server";
import { UPLOAD_DIR, TEMP_UPLOAD_DIR } from "./constants";
import { createDirIfNotExists } from "./utils/createDirIfNotExists";
async function bootstrap() {
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
}

bootstrap();
