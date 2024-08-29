import { DataSource } from "typeorm";
import path from "path";
import { User } from "../entities/User";
import { Task } from "../entities/Task.js";
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: true,
  entities: isProduction
    ? [
        path.resolve(__dirname, "../entities/User.js"),
        path.resolve(__dirname, "../entities/Task.js"),
      ] // Use paths to compiled JavaScript files in production
    : [User, Task], // Use class references in development
  migrations: [],
  subscribers: [],
});
