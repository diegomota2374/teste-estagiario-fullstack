import axios from "axios";

export interface Task {
  id: number;
  title: string;
  description: string;
  userId: number;
  completed: boolean;
}

const API_URL = process.env.REACT_APP_API_URL;

// Helper function to get authentication headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Fetch all tasks
export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(`${API_URL}/api/tasks`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching tasks:", error.message);
    } else {
      console.error("Unknown error occurred while fetching tasks:", error);
    }
    throw error;
  }
};

// Fetch a task by ID
export const getTaskById = async (id: number): Promise<Task> => {
  try {
    const response = await axios.get<Task>(`${API_URL}/api/tasks/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching task:", error.message);
    } else {
      console.error("Unknown error occurred while fetching task:", error);
    }
    throw error;
  }
};

// Create a new task
export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  try {
    const response = await axios.post<Task>(`${API_URL}/api/tasks`, task, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating task:", error.message);
    } else {
      console.error("Unknown error occurred while creating task:", error);
    }
    throw error;
  }
};

// Update an existing task
export const updateTask = async (
  id: number,
  task: Partial<Task>
): Promise<Task> => {
  try {
    const response = await axios.put<Task>(`${API_URL}/api/tasks/${id}`, task, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating task:", error.message);
    } else {
      console.error("Unknown error occurred while updating task:", error);
    }
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/api/tasks/${id}`, {
      headers: getAuthHeaders(),
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error deleting task:", error.message);
    } else {
      console.error("Unknown error occurred while deleting task:", error);
    }
    throw error;
  }
};
