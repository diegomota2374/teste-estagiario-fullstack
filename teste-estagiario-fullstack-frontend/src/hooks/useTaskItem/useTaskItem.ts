// src/hooks/useTaskItem.ts
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTasks } from "../../context/TaskContext";
import { useTaskList } from "../../hooks/useTaskList/useTaskList";
import { toast } from "sonner";
import { TaskFormInputs, TaskItemProps } from "../../types";

// Define the shape of the form data
const useTaskItem = ({ task }: TaskItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

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
  } = useForm<TaskFormInputs>({
    defaultValues: {
      title: editedTitle,
      description: editedDescription,
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<TaskFormInputs> = async (data) => {
    try {
      await handleSaveClick(data.title, data.description);
      reset({
        title: data.title,
        description: data.description,
      });
      toast.success("Tarefa Editada com Sucesso!", { duration: 2000 });
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleCancel = () => {
    handleCancelClick();
    reset({
      title: task.title,
      description: task.description,
    });
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await removeTask(task.id);
      toast.success("Tarefa Excluida com Sucesso!", { duration: 2000 });
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleDescriptionClick = () => {
    setShowFullDescription(!showFullDescription); // Toggle the description view on click
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
    handleDescriptionClick,
    showFullDescription,
    handleEditClick,
    onSubmit,
    isEditing,
  };
};

export default useTaskItem;
