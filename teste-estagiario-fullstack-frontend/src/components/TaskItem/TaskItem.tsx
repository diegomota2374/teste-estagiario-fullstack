// src/components/TaskItem.tsx
import React, { useState } from "react";
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
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import useTaskItem from "../../hooks/useTaskItem/useTaskItem";

// Define the shape of the form data
interface FormValues {
  title: string;
  description: string;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const {
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
  } = useTaskItem({ task });

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
            <TaskButton onClick={handleDeleteClick}>Delete</TaskButton>
          </TaskButtonContainer>
        </>
      )}
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </TaskItemContainer>
  );
};

export default TaskItem;
