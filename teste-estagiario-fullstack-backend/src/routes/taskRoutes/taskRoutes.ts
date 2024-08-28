import { Router } from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../../controllers/taskController/taskController";
import { authMiddleware } from "../../middleware/auth";

const router = Router();

// Rotas protegidas
router.post("/tasks", authMiddleware, createTask);
router.get("/tasks", authMiddleware, getTasks);
router.get("/tasks/:id", authMiddleware, getTaskById);
router.put("/tasks/:id", authMiddleware, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);

export default router;
