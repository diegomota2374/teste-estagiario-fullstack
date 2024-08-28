import "reflect-metadata";
import express from "express";
import { connectDatabase } from "./database";
import taskRoutes from "./routes/taskRoutes/taskRoutes";
import authRoutes from "./routes/authRoutes/authRoutes";
import userRoutes from "./routes/userRoutes/userRoutes";
import cors from "cors";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000", // URL do seu frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Roteamento de tarefas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", userRoutes);

app.listen(port, async () => {
  await connectDatabase();
  console.log(`Servidor rodando em http://localhost:${port}`);
});
