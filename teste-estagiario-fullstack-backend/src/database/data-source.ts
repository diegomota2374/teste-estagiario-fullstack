import { DataSource } from "typeorm";
import path from "path";
import { User } from "../entities/User";
import { Task } from "../entities/Task";
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: true,
  entities: isProduction
    ? [path.resolve(__dirname, "../entities/*.js")] // Path to compiled JavaScript files in production
    : [User, Task], // Direct class references in development
  migrations: [],
  subscribers: [],
});
