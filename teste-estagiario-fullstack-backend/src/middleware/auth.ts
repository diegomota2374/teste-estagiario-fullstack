// src/middleware/auth.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth";
import { JwtPayload } from "../interfaces/JwtPayload";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret) as JwtPayload;
    (req as any).user = decoded; // Solução temporária
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }
}
