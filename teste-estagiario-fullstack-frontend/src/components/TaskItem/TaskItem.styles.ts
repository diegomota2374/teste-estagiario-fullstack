// src/components/TaskItem.styles.ts
import styled from "styled-components";

export const TaskItemContainer = styled.div`
  background: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const TaskTitle = styled.h3`
  margin-top: 0;
  color: #e0e0e0;
`;

export const TaskDescription = styled.p`
  margin: 8px 0;
  color: #b0b0b0;
`;

export const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 8px 0;
  color: #e0e0e0;
`;

export const TaskCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
`;

export const TaskButton = styled.button`
  background: #444;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;
  padding: 8px 16px;

  &:hover {
    background: #333;
  }

  &.cancel {
    background: #882222;
    &:hover {
      background: #661818;
    }
  }

  &.save {
    background: #226622;
    &:hover {
      background: #184418;
    }
  }
`;

export const TaskInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
  background: #333;
  color: #fff;
  border: 1px solid #444;
  padding: 8px;
  border-radius: 4px;
`;

export const TaskTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 8px;
  background: #333;
  color: #fff;
  border: 1px solid #444;
  padding: 8px;
  border-radius: 4px;
`;
export const TaskButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;
