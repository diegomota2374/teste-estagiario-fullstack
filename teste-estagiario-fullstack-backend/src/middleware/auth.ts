import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth";
import { User } from "../entities/User";
import { AppDataSource } from "../database/data-source";

const userRepository = AppDataSource.getRepository(User);

interface AuthRequest extends Request {
  user?: User;
}

export async function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token not provided or malformed" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret) as { id: number };

    // Fetch the user from the database using the correct key from the token payload
    const user = await userRepository.findOneBy({ id: decoded.id });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // Attach user to the request object

    next();
  } catch (err) {
    console.error("Authentication error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
