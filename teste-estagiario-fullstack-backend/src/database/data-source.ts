import { DataSource } from "typeorm";
import path from "path";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "../src/database/database.sqlite"),
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "../src/entities/*.js")], // Adjust path for compiled JS files
  migrations: [],
  subscribers: [],
});
