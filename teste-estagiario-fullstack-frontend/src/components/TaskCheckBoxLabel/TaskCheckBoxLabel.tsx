// src/components/TaskCheckboxLabel.tsx
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
    <TaskCheckboxButton checked={checked} onClick={handleClick}>
      {loading ? "Carregando..." : checked ? "Completo" : "Pendente"}
    </TaskCheckboxButton>
  );
};

export default TaskCheckboxLabel;
