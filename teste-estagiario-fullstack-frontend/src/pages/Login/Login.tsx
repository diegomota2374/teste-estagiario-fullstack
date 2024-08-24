import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { User, AuthResponse } from "../../types";
import { useAuth } from "../../context/AuthContext";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { login } = useAuth();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const response = await axios.post<AuthResponse>("/api/users/login", data);
      login(response.data.token);
      alert("Login successful");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
