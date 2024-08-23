import jwt from "jsonwebtoken";
import authConfig from "../config/auth";
import { JwtPayload } from "../interfaces/JwtPayload";

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, authConfig.jwt.secret, {
    expiresIn: authConfig.jwt.expiresIn,
  });
}
