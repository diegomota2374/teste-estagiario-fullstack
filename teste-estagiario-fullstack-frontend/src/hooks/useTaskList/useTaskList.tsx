// src/hooks/useTaskList/useTaskList.ts
import { useState, useCallback } from "react";
import { updateTask, getTaskById } from "../../services/taskService";

interface UseTaskListProps {
  taskId: number;
  initialTitle: string;
  initialDescription: string;
}

export const useTaskList = ({
  taskId,
  initialTitle,
  initialDescription,
}: UseTaskListProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedDescription, setEditedDescription] =
    useState(initialDescription);

  const handleToggleComplete = useCallback(async () => {
    try {
      const task = await getTaskById(taskId);
      await updateTask(taskId, { completed: !task.completed });
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  }, [taskId, isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    if (editedTitle.trim() === "" || editedDescription.trim() === "") {
      alert("Title and description cannot be empty");
      return;
    }
    try {
      await updateTask(taskId, {
        title: editedTitle,
        description: editedDescription,
      });
      setIsEditing(false);
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
