import axios from "axios";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get<Task[]>(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const response = await axios.post<Task>(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (
  id: number,
  task: Partial<Task>
): Promise<Task> => {
  const response = await axios.put<Task>(`${API_URL}/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
