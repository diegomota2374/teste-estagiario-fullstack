import { DataSource } from "typeorm";
import path from "path";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "../entities/*.js")], // Adjust path for compiled JS files
  migrations: [],
  subscribers: [],
});
