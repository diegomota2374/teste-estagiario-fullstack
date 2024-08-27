// src/components/TaskItem.tsx
import { Task } from "../../services/taskService";
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
            {...register("title", { required: "O título é obrigatório" })}
            placeholder="Title"
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
          <TaskTextarea
            {...register("description", {
              required: "A descrição é obrigatória",
            })}
            placeholder="Description"
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
          <TaskButtonContainer>
            <TaskButton className="save" type="submit">
              Salvar
            </TaskButton>
            <TaskButton className="cancel" type="button" onClick={handleCancel}>
              Cancelar
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
            <TaskButton onClick={handleEditClick}>Editar</TaskButton>
            <TaskButton onClick={handleDeleteClick}>Excluir</TaskButton>
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
