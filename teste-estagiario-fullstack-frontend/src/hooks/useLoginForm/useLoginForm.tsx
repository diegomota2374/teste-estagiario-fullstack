import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { User, AuthResponse } from "../../types";
import { useAuth } from "../../context/AuthContext";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<User> = async (data) => {
    setLoading(true);
    setServerError(null);

    try {
      const response = await axios.post<AuthResponse>("/api/users/login", data);
      login(response.data.token);
      alert("Login successful");
      reset(); // Reset form fields after successful login
    } catch (error: any) {
      setServerError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    loading,
    serverError,
    onSubmit,
  };
};
