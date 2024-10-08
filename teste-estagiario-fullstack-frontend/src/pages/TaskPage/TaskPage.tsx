import { useState } from "react";
import {
  PageContainer,
  MainContent,
  FloatingButtonContainer,
} from "./TaskPage.styles";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import useTaskForm from "../../hooks/useTaskForm/useTaskForm";

const TaskPage: React.FC = () => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);

  const { register, handleSubmit, errors, onSubmit, reset } = useTaskForm(
    () => {
      setShowTaskForm(false); // Callback to hide form on successful submission
    }
  );

  const toggleView = () => {
    reset();
    setShowTaskForm(!showTaskForm);
  };

  return (
    <PageContainer data-testid="page-container">
      <MainContent data-testid="main-content">
        {showTaskForm ? (
          <TaskForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            onBack={toggleView}
            data-testid="task-form" // Optional: Add data-testid here if needed
          />
        ) : (
          <TaskList data-testid="task-list" /> // Add data-testid here if needed
        )}
      </MainContent>
      <FloatingButtonContainer data-testid="floating-button-container">
        {!showTaskForm && (
          <FloatingButton onClick={toggleView} data-testid="floating-button" />
        )}
      </FloatingButtonContainer>
    </PageContainer>
  );
};

export default TaskPage;
