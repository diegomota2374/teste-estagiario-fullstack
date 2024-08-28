// src/routes/userRoutes.ts

import { Router } from "express";
import { createUser } from "../../controllers/userController/userController";

const router = Router();

// Rota para criar um novo usuário
router.post("/users", createUser);

export default router;
