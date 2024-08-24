// src/context/TaskContext.tsx
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

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  editTask: (id: number, updatedTask: Partial<Task>) => void;
  removeTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };

    fetchTasks();
  }, []);

  const addTask = async (task: Omit<Task, "id">) => {
    const newTask = await createTask(task);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = async (id: number, updatedTask: Partial<Task>) => {
    const updated = await updateTask(id, updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updated : task))
    );
  };

  const removeTask = async (id: number) => {
    await deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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
