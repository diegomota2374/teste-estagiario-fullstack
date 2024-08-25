// src/controllers/authController.ts

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../entities/User";
import authConfig from "../config/auth";
import { AppDataSource } from "../database/data-source";

const userRepository = AppDataSource.getRepository(User);

export async function login(req: Request, res: Response): Promise<Response> {
  const { email, password } = req.body;

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    return res.status(401).json({ message: "Usuário não encontrado" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Senha inválida" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    authConfig.jwt.secret,
    {
      expiresIn: "1d",
    }
  );

  return res.json({ token });
}
