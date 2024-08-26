// src/hooks/useTaskItem.ts
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTasks } from "../../context/TaskContext";
import { useTaskList } from "../../hooks/useTaskList/useTaskList";
import { Task } from "../../services/taskService";

// Define the shape of the form data
interface FormValues {
  title: string;
  description: string;
}

interface UseTaskItemProps {
  task: Task;
}

const useTaskItem = ({ task }: UseTaskItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeTask } = useTasks();
  const {
    isEditing,
    handleToggleComplete,
    editedTitle,
    editedDescription,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
  } = useTaskList({
    taskId: task.id,
    initialTitle: task.title,
    initialDescription: task.description,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      title: editedTitle,
      description: editedDescription,
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await handleSaveClick(data.title, data.description);
      reset({
        title: data.title,
        description: data.description,
      }); // Reset form after successful save
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleCancel = () => {
    handleCancelClick(); // Chama a função para sair do modo de edição
    reset({
      title: task.title,
      description: task.description,
    }); // Reseta o formulário para os valores originais
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await removeTask(task.id);
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    register,
    handleSubmit,
    errors,
    handleCancel,
    handleDeleteClick,
    handleConfirmDelete,
    handleCancelDelete,
    handleToggleComplete,
    handleEditClick,
    onSubmit,
    isEditing,
  };
};

export default useTaskItem;
