import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import { useAuth } from "../../context/AuthContext";

const TaskPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Chama a função de logout do AuthContext
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* <TaskForm /> */}
      <TaskList />
    </div>
  );
};

export default TaskPage;
