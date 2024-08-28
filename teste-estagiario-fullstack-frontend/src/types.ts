import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Task } from "./services/taskService";

// User-related interfaces
export interface User {
  name?: string;
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

// Task-related interfaces
export interface NewTask {
  title: string;
  description: string;
  userId: number;
  completed: boolean;
}

export interface UseTaskListProps {
  taskId: number;
  initialTitle: string;
  initialDescription: string;
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
  onBack: () => void; // Additional property for the back button
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

export interface TaskItemProps {
  task: Task;
}

// UI-related interfaces
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
