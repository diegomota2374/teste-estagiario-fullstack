import useTaskForm from "../../hooks/useTaskForm/useTaskForm";

const TaskForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useTaskForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          {...register("title", {
            required: "O título é obrigatório",
            maxLength: { value: 100, message: "O título é muito longo" },
          })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label>Descrição:</label>
        <textarea
          {...register("description", {
            required: "A descrição é obrigatória",
            maxLength: { value: 500, message: "A descrição é muito longa" },
          })}
        ></textarea>
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <button type="submit">Adicionar tarefa</button>
    </form>
  );
};

export default TaskForm;
