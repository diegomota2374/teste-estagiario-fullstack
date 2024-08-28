// src/hooks/useTaskForm.ts
import { useForm, SubmitHandler } from "react-hook-form";
import { useTasks } from "../../context/TaskContext";
import { useAuth } from "../../context/AuthContext";
import { NewTask, TaskFormInputs } from "../../types";
import { toast } from "sonner";

const useTaskForm = (onTaskAdded: () => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormInputs>();

  const { addTask } = useTasks();
  const { userId } = useAuth();

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    if (userId) {
      const newTask: NewTask = {
        title: data.title,
        description: data.description,
        completed: false,
        userId: userId, // Adicionar o userId ao criar a tarefa
      };

      addTask(newTask);
      onTaskAdded();
      reset();
      toast.success(" Tarefa Criada com Sucesso! ", { duration: 2000 });
    } else {
      console.error("O ID do usuário não está disponível");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    reset,
  };
};

export default useTaskForm;
