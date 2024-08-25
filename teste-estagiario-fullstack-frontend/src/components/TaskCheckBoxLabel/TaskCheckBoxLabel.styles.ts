// src/components/TaskCheckboxLabel.styles.ts
import styled from "styled-components";

interface TaskCheckboxButtonProps {
  checked: boolean;
}

export const TaskCheckboxButton = styled.button<TaskCheckboxButtonProps>`
  background-color: ${({ checked }) => (checked ? "#27ae60" : "#e74c3c")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ checked }) => (checked ? "#2ecc71" : "#c0392b")};
  }
`;
