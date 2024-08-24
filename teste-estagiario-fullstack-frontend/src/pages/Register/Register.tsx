import { useRegisterForm } from "../../hooks/useRegisterForm/useRegisterForm";

const Register = () => {
  const { register, handleSubmit, errors, loading, serverError, onSubmit } =
    useRegisterForm();

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <input
            {...register("name", {
              required: "O nome é obrigatório",
              minLength: {
                value: 2,
                message: "O nome deve ter pelo menos 2 caracteres",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Endereço de e-mail inválido",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        {serverError && <p>{serverError}</p>}
      </form>
    </div>
  );
};

export default Register;
