import axios from "axios";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(`${API_URL}/api/tasks`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erro ao buscar tasks:", error.message);
    } else {
      console.error("Erro desconhecido ao buscar tasks:", error);
    }
    throw error; // Re-lançar o erro para que ele possa ser tratado em outro lugar
  }
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const response = await axios.post<Task>(`${API_URL}/tasks`, task, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateTask = async (
  id: number,
  task: Partial<Task>
): Promise<Task> => {
  const response = await axios.put<Task>(`${API_URL}/tasks/${id}`, task, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/tasks/${id}`, {
    headers: getAuthHeaders(),
  });
};
