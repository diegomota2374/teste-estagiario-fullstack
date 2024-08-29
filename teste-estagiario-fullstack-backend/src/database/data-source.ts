import { DataSource } from "typeorm";
import path from "path";
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: true,
  entities: isProduction
    ? [path.join(__dirname, "../entities/*.js")]
    : [path.join(__dirname, "../entities/*.ts")], // Use o caminho correto para arquivos .ts ou .js
  migrations: [],
  subscribers: [],
});
