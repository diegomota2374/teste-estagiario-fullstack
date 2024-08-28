// src/hooks/useTaskList/useTaskList.ts
import { useState, useCallback } from "react";
import { updateTask, getTaskById } from "../../services/taskService";
import { useTasks } from "../../context/TaskContext";
import { UseTaskListProps } from "../../types";

export const useTaskList = ({
  taskId,
  initialTitle,
  initialDescription,
}: UseTaskListProps) => {
  const { editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedDescription, setEditedDescription] =
    useState(initialDescription);

  const handleToggleComplete = useCallback(async () => {
    try {
      const task = await getTaskById(taskId);
      const updatedTask = await updateTask(taskId, {
        completed: !task.completed,
      });
      editTask(taskId, { completed: updatedTask.completed });
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  }, [taskId, isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (title: string, description: string) => {
    try {
      const updatedTask = await updateTask(taskId, { title, description });
      setIsEditing(false);
      editTask(taskId, {
        title: updatedTask.title,
        description: updatedTask.description,
      });
      setEditedTitle(title);
      setEditedDescription(description);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTitle(initialTitle);
    setEditedDescription(initialDescription);
  };

  return {
    isEditing,
    editedTitle,
    editedDescription,
    setEditedTitle,
    setEditedDescription,
    handleToggleComplete,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
  };
};
