import styled from "styled-components";

export const TaskItemContainer = styled.div`
  background: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
  min-width: 300px;
  @media (min-width: 600px) {
    padding: 24px;
  }
`;

export const TaskTitle = styled.h3`
  margin: 0;
  color: #e0e0e0;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const TaskDescription = styled.p`
  margin: 8px 0;
  color: #b0b0b0;

  @media (min-width: 600px) {
    font-size: 1rem;
    margin: 12px 0;
  }
`;

export const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 8px 0;
  color: #e0e0e0;

  @media (min-width: 600px) {
    margin: 12px 0;
  }
`;

export const TaskCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;

  @media (min-width: 600px) {
    margin-right: 12px;
    transform: scale(1.2);
  }
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
  width: 35%;

  &:hover {
    background: #333;
  }

  &.cancel {
    background: #6c757d;
    &:hover {
      background: #5a6268;
    }
  }

  &.save {
    background: #6200ee;
    &:hover {
      background: #3700b3;
    }
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    padding: 12px 20px;
    width: auto;
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

  @media (min-width: 600px) {
    padding: 12px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff6f6f;
  font-size: 0.875rem;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

export const TaskTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 8px;
  background: #333;
  color: #fff;
  border: 1px solid #444;
  padding: 8px;
  border-radius: 4px;

  @media (min-width: 600px) {
    padding: 12px;
  }
`;

export const TaskButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 600px) {
    gap: 12px;
    margin-top: 12px;
  }
`;
