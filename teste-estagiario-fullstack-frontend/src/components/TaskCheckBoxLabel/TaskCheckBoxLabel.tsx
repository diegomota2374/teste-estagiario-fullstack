// src/components/TaskCheckboxLabel.tsx
import React from "react";
import { TaskCheckboxButton } from "./TaskCheckBoxLabel.styles";

interface TaskCheckboxLabelProps {
  checked: boolean;
  onChange: () => void;
}

const TaskCheckboxLabel: React.FC<TaskCheckboxLabelProps> = ({
  checked,
  onChange,
}) => {
  return (
    <TaskCheckboxButton checked={checked} onClick={onChange}>
      {checked ? "Completo" : "Pendente"}
    </TaskCheckboxButton>
  );
};

export default TaskCheckboxLabel;
