// src/pages/TaskPage/TaskPage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import BackButton from "../../components/BackButton/BackButton";
import useTaskForm from "../../hooks/useTaskForm/useTaskForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
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

  const { register, handleSubmit, errors, onSubmit, reset } = useTaskForm(
    () => {
      setShowTaskForm(false);
    }
  );

  const toggleView = () => {
    reset();
    setShowTaskForm(!showTaskForm);
  };

  return (
    <PageContainer>
      <MainContent>
        {showTaskForm ? (
          <Header>
            <BackButton onClick={toggleView} />
            <h1>Gerenciador de tarefas</h1>
          </Header>
        ) : (
          <h1>Gerenciador de tarefas</h1>
        )}
        {showTaskForm ? (
          <TaskForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            onBack={toggleView}
          />
        ) : (
          <TaskList />
        )}
      </MainContent>
      {!showTaskForm && <FloatingButton onClick={toggleView} />}
    </PageContainer>
  );
};

export default TaskPage;
