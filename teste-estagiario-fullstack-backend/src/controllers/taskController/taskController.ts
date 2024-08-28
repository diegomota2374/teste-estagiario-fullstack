import { Request, Response } from "express";
import { Task } from "../../entities/Task";
import { User } from "../../entities/User";
import { AppDataSource } from "../../database/data-source";
import { AuthRequest } from "../../interfaces/AuthRequest";

const taskRepository = AppDataSource.getRepository(Task);
const userRepository = AppDataSource.getRepository(User);

// Create a task
export async function createTask(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description, userId } = req.body;

  if (!title || !description || !userId || isNaN(userId)) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    // Convert userId to number
    const userIdNumber = parseInt(userId, 10);

    const user = await userRepository.findOneBy({ id: userIdNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const task = new Task();
    task.title = title;
    task.description = description;
    task.user = user;

    await taskRepository.save(task);

    return res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ message: "Error creating task" });
  }
}

// Get all tasks for the logged-in user
export async function getTasks(req: Request, res: Response): Promise<Response> {
  const userId = (req as AuthRequest).user?.id;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  try {
    const tasks = await taskRepository.find({
      where: { user: { id: userId } },
      relations: ["user"],
    });
    return res.json(tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    return res.status(500).json({ message: "Error retrieving tasks" });
  }
}

// Get task by ID
export async function getTaskById(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;

  try {
    const task = await taskRepository.findOne({
      where: { id: parseInt(id) },
      relations: ["user"],
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.json(task);
  } catch (error) {
    console.error("Error retrieving task:", error);
    return res.status(500).json({ message: "Error retrieving task" });
  }
}

// Update task
export async function updateTask(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const { title, description, userId, completed } = req.body;

  try {
    const task = await taskRepository.findOne({ where: { id: parseInt(id) } });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (title) task.title = title;
    if (description) task.description = description;
    if (userId) {
      const user = await userRepository.findOneBy({ id: parseInt(userId) });
      if (user) task.user = user;
    }
    if (completed !== undefined) task.completed = completed;

    await taskRepository.save(task);

    return res.json({ message: "Task updated successfully", task });
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Error updating task" });
  }
}

// Delete task
export async function deleteTask(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;

  try {
    const result = await taskRepository.delete(id);

    if (result.affected === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: "Error deleting task" });
  }
}
