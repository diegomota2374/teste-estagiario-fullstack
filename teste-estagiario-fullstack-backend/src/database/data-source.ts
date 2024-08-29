import { DataSource } from "typeorm";
import path from "path";
import { User } from "../entities/User"; // Importar diretamente para desenvolvimento
import { Task } from "../entities/Task";
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: true,
  entities: isProduction
    ? [path.join(__dirname, "../entities/*.js")] // Certifique-se de que este caminho está correto
    : [User, Task], // Utilizado em desenvolvimento
  migrations: [],
  subscribers: [],
});
