import multer from "multer";
import { TEMP_UPLOAD_DIR } from "../constants";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, TEMP_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

export const upload = multer({ storage });
