import { useLoginForm } from "../../hooks/useLoginForm/useLoginForm";

const Login = () => {
  const { register, handleSubmit, errors, loading, serverError, onSubmit } =
    useLoginForm();

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
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
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {serverError && <p>{serverError}</p>}
      </form>
    </div>
  );
};

export default Login;
