import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
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
  name: string;
  email: string;
  iat: number;
  exp: number;
}

export interface AuthContextType {
  isAuthenticated: boolean | undefined;
  userId: number | null;
  login: (token: string) => void;
  logout: () => void;
  userName: string;
}

export interface TaskFormInputs {
  title: string;
  description: string;
}

export interface TaskFormProps {
  register: UseFormRegister<TaskFormInputs>;
  handleSubmit: UseFormHandleSubmit<TaskFormInputs>;
  errors: FieldErrors<TaskFormInputs>;
  onSubmit: (data: TaskFormInputs) => void;
  onBack: () => void; // Propriedade adicional para o botão de voltar
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

export interface TaskCheckboxLabelProps {
  checked: boolean;
  onChange: () => void;
}
export interface TaskCheckboxButtonProps {
  checked: boolean;
}

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export interface TaskItemProps {
  task: Task;
}
