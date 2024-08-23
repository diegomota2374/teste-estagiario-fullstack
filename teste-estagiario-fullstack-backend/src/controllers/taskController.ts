// src/controllers/taskController.ts

import { Request, Response } from "express";
import { Task } from "../entities/Task";
import { User } from "../entities/User";
import { AppDataSource } from "../database/data-source";

const taskRepository = AppDataSource.getRepository(Task);
const userRepository = AppDataSource.getRepository(User);

// Criar tarefa
export async function createTask(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description, userId } = req.body;

  if (!title || !description || !userId) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  try {
    const user = await userRepository.findOneBy({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const task = new Task();
    task.title = title;
    task.description = description;
    task.user = user;

    await taskRepository.save(task);

    return res.status(201).json({ message: "Tarefa criada com sucesso", task });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar tarefa", error });
  }
}

// Obter todas as tarefas
export async function getTasks(req: Request, res: Response): Promise<Response> {
  try {
    const tasks = await taskRepository.find({ relations: ["user"] });
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao obter tarefas", error });
  }
}

// Obter tarefa por ID
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
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao obter tarefa", error });
  }
}

// Atualizar tarefa
export async function updateTask(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const { title, description, userId } = req.body;

  try {
    const task = await taskRepository.findOne({ where: { id: parseInt(id) } });
    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    if (title) task.title = title;
    if (description) task.description = description;
    if (userId) {
      const user = await userRepository.findOneBy({ id: userId });
      if (user) task.user = user;
    }

    await taskRepository.save(task);

    return res.json({ message: "Tarefa atualizada com sucesso", task });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar tarefa", error });
  }
}

// Excluir tarefa
export async function deleteTask(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;

  try {
    const result = await taskRepository.delete(id);

    if (result.affected === 0) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    return res.json({ message: "Tarefa excluída com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao excluir tarefa", error });
  }
}
