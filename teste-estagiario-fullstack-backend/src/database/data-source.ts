import { DataSource } from "typeorm";
import path from "path";
import { User } from "../entities/User";
import { Task } from "../entities/Task";

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: true,
  entities: isProduction
    ? [path.join(__dirname, "../entities/*.js")] // Use paths to compiled JavaScript files in production
    : [User, Task], // Use class references in development
  migrations: [],
  subscribers: [],
});
