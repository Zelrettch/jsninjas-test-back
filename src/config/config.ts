import dotenv from "dotenv";
dotenv.config();

interface Config {
  PORT: number;
  NODE_ENV: string;
  APP_DOMAIN: string;
  ORIGIN_URL: string;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_DOMAIN: process.env.APP_DOMAIN || "http://localhost:3000",
  ORIGIN_URL: process.env.ORIGIN_URL || "http://localhost:5173",
};

export default config;
