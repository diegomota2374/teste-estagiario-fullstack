// src/components/TaskCheckboxLabel/TaskCheckboxLabel.tsx
import { useState } from "react";
import { TaskCheckboxButton } from "./TaskCheckBoxLabel.styles";
import { TaskCheckboxLabelProps } from "../../types";

const TaskCheckboxLabel: React.FC<TaskCheckboxLabelProps> = ({
  checked,
  onChange,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onChange();
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskCheckboxButton
      data-testid="task-checkbox-button"
      checked={checked}
      onClick={handleClick}
    >
      {loading ? (
        <span data-testid="loading-text">Carregando...</span>
      ) : checked ? (
        <span data-testid="completed-text">Completo</span>
      ) : (
        <span data-testid="pending-text">Pendente</span>
      )}
    </TaskCheckboxButton>
  );
};

export default TaskCheckboxLabel;
