// src/controllers/userController.ts

import { Request, Response } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";
import { AppDataSource } from "../../database/data-source";

// Obter o repositório de usuários
const userRepository = AppDataSource.getRepository(User);

export async function createUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, email, password } = req.body;

  // Verificar se o e-mail já está registrado
  const existingUser = await userRepository.findOneBy({ email });

  if (existingUser) {
    return res.status(400).json({ message: "E-mail já registrado" });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 12);

  // Criar o novo usuário
  const user = new User();
  user.name = name;
  user.email = email;
  user.password = hashedPassword;

  await userRepository.save(user);

  return res.status(201).json({ message: "Usuário criado com sucesso" });
}
