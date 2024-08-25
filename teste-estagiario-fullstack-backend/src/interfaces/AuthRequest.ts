import { Request as ExpressRequest } from "express";
import { User } from "../entities/User";

export interface AuthRequest extends ExpressRequest {
  user?: User;
}

// Then use AuthRequest in your controller
