import { Task } from "./services/taskService";

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface RegisterResponse {
  message: string;
}

export interface DecodedToken {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

export interface AuthContextType {
  isAuthenticated: boolean | undefined;
  userId: number | null;
  login: (token: string) => void;
  logout: () => void;
}

export interface TaskFormInputs {
  title: string;
  description: string;
}

export interface NewTask extends Omit<Task, "id"> {
  userId: number;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => Promise<void>;
  editTask: (id: number, updatedTask: Partial<Task>) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
}

export interface TaskFormProps {
  onBack: () => void;
}
