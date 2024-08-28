// src/components/TaskList.tsx
import { useTasks } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import styled from "styled-components";

// Grid container for the task items
const ContentList = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); // Responsive grid columns
  gap: 10px; // Space between grid items
  padding: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(400px, 1fr)
    ); // Adjust the number of columns
    gap: 14px;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(400px, 1fr)
    ); // Increase the minimum width for larger screens
    gap: 22px;
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
      <Title data-testid="task-list-title">Lista de Tarefas</Title>
      <ContentList data-testid="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ContentList>
    </>
  );
};

export default TaskList;
