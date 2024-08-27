// src/components/TaskItem.tsx
import {
  TaskItemContainer,
  TaskTitle,
  TaskDescription,
  TaskButton,
  TaskInput,
  TaskTextarea,
  TaskButtonContainer,
  ErrorMessage,
} from "./TaskItem.styles";
import TaskCheckboxLabel from "../TaskCheckBoxLabel/TaskCheckBoxLabel";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import useTaskItem from "../../hooks/useTaskItem/useTaskItem";
import { TaskItemProps } from "../../types";

// Define the shape of the form data
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
    handleDescriptionClick,
    showFullDescription,
    handleEditClick,
    onSubmit,
    isEditing,
  } = useTaskItem({ task });

  return (
    <TaskItemContainer data-testid="task-item-container">
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} data-testid="edit-form">
          <TaskInput
            {...register("title", {
              required: "O título é obrigatório",
              maxLength: { value: 100, message: "O título é muito longo" },
            })}
            placeholder="Title"
            data-testid="task-input-title"
          />
          {errors.title && (
            <ErrorMessage data-testid="error-title">
              {errors.title.message}
            </ErrorMessage>
          )}
          <TaskTextarea
            {...register("description", {
              required: "A descrição é obrigatória",
              maxLength: { value: 500, message: "A descrição é muito longa" },
            })}
            placeholder="Description"
            data-testid="task-textarea-description"
          />
          {errors.description && (
            <ErrorMessage data-testid="error-description">
              {errors.description.message}
            </ErrorMessage>
          )}
          <TaskButtonContainer data-testid="task-button-container">
            <TaskButton
              className="save"
              type="submit"
              data-testid="save-button"
            >
              Salvar
            </TaskButton>
            <TaskButton
              className="cancel"
              type="button"
              onClick={handleCancel}
              data-testid="cancel-button"
            >
              Cancelar
            </TaskButton>
          </TaskButtonContainer>
        </form>
      ) : (
        <>
          <TaskTitle
            showFullDescription={showFullDescription}
            data-testid="task-title"
          >
            {task.title}
          </TaskTitle>
          <TaskDescription
            showFullDescription={showFullDescription}
            onClick={handleDescriptionClick}
            data-testid="task-description"
          >
            {showFullDescription
              ? task.description
              : task.description.split("\n")[0]}
          </TaskDescription>
          <TaskCheckboxLabel
            checked={task.completed}
            onChange={handleToggleComplete}
            data-testid="task-checkbox-label"
          />
          <TaskButtonContainer data-testid="task-button-container">
            <TaskButton onClick={handleEditClick} data-testid="edit-button">
              Editar
            </TaskButton>
            <TaskButton onClick={handleDeleteClick} data-testid="delete-button">
              Excluir
            </TaskButton>
          </TaskButtonContainer>
        </>
      )}
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        data-testid="confirm-delete-modal"
      />
    </TaskItemContainer>
  );
};

export default TaskItem;
