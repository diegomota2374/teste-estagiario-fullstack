import "reflect-metadata";
import express from "express";
import { connectDatabase } from "./database";
import taskRoutes from "./routes/taskRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use(express.json());

// Roteamento de tarefas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", userRoutes);

app.listen(port, async () => {
  await connectDatabase();
  console.log(`Servidor rodando em http://localhost:${port}`);
});
