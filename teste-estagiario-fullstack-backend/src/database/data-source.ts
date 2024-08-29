import { DataSource } from "typeorm";
import path from "path";
const { User } = require("../entities/User");
const { Task } = require("../entities/Task");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

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
