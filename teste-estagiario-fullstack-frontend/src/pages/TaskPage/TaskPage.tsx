import { useState } from "react";
import {
  PageContainer,
  MainContent,
  Header,
  Title,
  FloatingButtonContainer,
} from "./TaskPage.styles";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import BackButton from "../../components/BackButton/BackButton";
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
    <PageContainer>
      <MainContent>
        <Header>
          {showTaskForm && <BackButton onClick={toggleView} />}
          <Title>Gerenciador de tarefas</Title>
        </Header>
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
      <FloatingButtonContainer>
        {!showTaskForm && <FloatingButton onClick={toggleView} />}
      </FloatingButtonContainer>
    </PageContainer>
  );
};

export default TaskPage;
