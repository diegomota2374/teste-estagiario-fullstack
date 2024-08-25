// src/components/TaskItem.tsx
import React from "react";
import { Task } from "../../services/taskService";
import { useTaskList } from "../../hooks/useTaskList/useTaskList";
import { useTasks } from "../../context/TaskContext";
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

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { removeTask } = useTasks();
  const {
    isEditing,
    editedTitle,
    editedDescription,
    setEditedTitle,
    setEditedDescription,
    handleToggleComplete,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
  } = useTaskList({
    taskId: task.id,
    initialTitle: task.title,
    initialDescription: task.description,
  });

  return (
    <TaskItemContainer>
      {isEditing ? (
        <>
          <TaskInput
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <TaskTextarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <TaskButtonContainer>
            <TaskButton className="save" onClick={handleSaveClick}>
              Save
            </TaskButton>
            <TaskButton className="cancel" onClick={handleCancelClick}>
              Cancel
            </TaskButton>
          </TaskButtonContainer>
        </>
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
