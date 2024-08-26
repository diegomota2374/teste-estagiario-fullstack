import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Task,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";
import { TaskContextType } from "../types";

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Re-fetch tasks after adding a new task
  const addTask = async (task: Omit<Task, "id">) => {
    try {
      await createTask(task);
      // Re-fetch tasks to get the updated list
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Re-fetch tasks after editing a task
  const editTask = async (id: number, updatedTask: Partial<Task>) => {
    try {
      await updateTask(id, updatedTask);
      // Re-fetch tasks to get the updated list
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  // Re-fetch tasks after removing a task
  const removeTask = async (id: number) => {
    try {
      await deleteTask(id);
      // Re-fetch tasks to get the updated list
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};
