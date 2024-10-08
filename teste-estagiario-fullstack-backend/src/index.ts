import "reflect-metadata";
import express from "express";
import { connectDatabase } from "./database";
import taskRoutes from "./routes/taskRoutes/taskRoutes";
import authRoutes from "./routes/authRoutes/authRoutes";
import userRoutes from "./routes/userRoutes/userRoutes";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

app.use(
  cors({
    origin: "*", // URL do seu frontend
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
