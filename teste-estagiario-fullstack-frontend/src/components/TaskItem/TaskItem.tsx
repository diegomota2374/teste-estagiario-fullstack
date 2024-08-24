// src/components/TaskItem.tsx
import React from "react";
import { Task } from "../../services/taskService";
import { useTasks } from "../../context/TaskContext";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { editTask, removeTask } = useTasks();

  const handleToggleComplete = () => {
    editTask(task.id, { completed: !task.completed });
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
        />
        Completed
      </label>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
