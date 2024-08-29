import { DataSource } from "typeorm";
import path from "path";
import { User } from "../entities/User";
import { Task } from "../entities/Task";

const isProduction = process.env.NODE_ENV === "production";

console.log(
  "Entities Path:",
  isProduction ? path.resolve(__dirname, "../entities/*.js") : [User, Task]
);

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: true,
  entities: isProduction
    ? [path.resolve(__dirname, "../entities/*.js")] // Use paths to compiled JavaScript files in production
    : [User, Task], // Use class references in development
  migrations: [],
  subscribers: [],
});
