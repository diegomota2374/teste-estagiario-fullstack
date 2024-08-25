// src/pages/TaskPage/TaskPage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import BackButton from "../../components/BackButton/BackButton";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
}
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px; /* Espaço entre o botão de volta e o título */
`;

const TaskPage: React.FC = () => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);

  const toggleView = () => {
    setShowTaskForm(!showTaskForm);
  };

  return (
    <PageContainer>
      <MainContent>
        {showTaskForm ? (
          <Header>
            <BackButton onClick={toggleView} />
            <h1>Task Manager</h1>
          </Header>
        ) : (
          <h1>Task Manager</h1>
        )}
        {showTaskForm ? <TaskForm onBack={toggleView} /> : <TaskList />}
      </MainContent>
      {!showTaskForm && <FloatingButton onClick={toggleView} />}
    </PageContainer>
  );
};

export default TaskPage;
