import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Task } from "../entities/Task";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: isProduction
    ? "./dist/src/database/database.sqlite"
    : "./src/database/database.sqlite",
  synchronize: true,
  logging: false,
  entities: isProduction
    ? [path.join(__dirname, "../entities/*.js")]
    : [User, Task],
  migrations: [],
  subscribers: [],
});
