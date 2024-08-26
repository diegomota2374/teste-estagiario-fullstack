// src/components/TaskItem.tsx
import React from "react";
import { Task } from "../../services/taskService";
import { useTaskList } from "../../hooks/useTaskList/useTaskList";
import { useTasks } from "../../context/TaskContext";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TaskItemContainer,
  TaskTitle,
  TaskDescription,
  TaskButton,
  TaskInput,
  TaskTextarea,
  TaskButtonContainer,
} from "./TaskItem.styles";
import TaskCheckboxLabel from "../TaskCheckBoxLabel/TaskCheckBoxLabel";

// Define the shape of the form data
interface FormValues {
  title: string;
  description: string;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
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

  return (
    <TaskItemContainer>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TaskInput
            {...register("title", { required: "Title is required" })}
            placeholder="Title"
          />
          {errors.title && <p>{errors.title.message}</p>}
          <TaskTextarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Description"
          />
          {errors.description && <p>{errors.description.message}</p>}
          <TaskButtonContainer>
            <TaskButton className="save" type="submit">
              Save
            </TaskButton>
            <TaskButton className="cancel" type="button" onClick={handleCancel}>
              Cancel
            </TaskButton>
          </TaskButtonContainer>
        </form>
      ) : (
        <>
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDescription>{task.description}</TaskDescription>
          <TaskCheckboxLabel
            checked={task.completed}
            onChange={handleToggleComplete}
          />
          <TaskButtonContainer>
            <TaskButton onClick={handleEditClick}>Edit</TaskButton>
            <TaskButton onClick={() => removeTask(task.id)}>Delete</TaskButton>
          </TaskButtonContainer>
        </>
      )}
    </TaskItemContainer>
  );
};

export default TaskItem;
