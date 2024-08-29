import { DataSource } from "typeorm";
import path from "path";
import { User } from "../entities/User"; // Certifique-se de que o caminho está correto
import { Task } from "../entities/Task"; // Certifique-se de que o caminho está correto

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database/database.sqlite"),
  synchronize: true,
  logging: true,
  entities: isProduction
    ? [path.join(__dirname, "../entities/*.js")] // Usando caminho absoluto para arquivos JS em produção
    : [User, Task], // Referências diretas às classes em desenvolvimento
  migrations: [],
  subscribers: [],
});
