// src/components/TaskList.tsx
import React from "react";
import { useTasks } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import styled from "styled-components";

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
// Title styling
export const Title = styled.h1`
  color: #e0e0e0;
  padding-left: 30px;
  @media (min-width: 600px) {
    padding-left: 60px;
    margin-bottom: 40px;
  }
`;

const TaskList: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <>
      <Title>Lista de Tarefas</Title>
      <ContentList>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ContentList>
    </>
  );
};

export default TaskList;
