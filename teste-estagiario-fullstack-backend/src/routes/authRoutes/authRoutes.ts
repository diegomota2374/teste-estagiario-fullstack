// src/routes/authRoutes.ts

import { Router } from "express";
import { login } from "../../controllers/authController/authController";

const router = Router();

// Rota para login
router.post("/login", login);

export default router;
