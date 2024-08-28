import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { User, RegisterResponse, AuthResponse } from "../../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";

export const useRegisterForm = () => {
  // Initialize form handling with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  const { login } = useAuth();
  // State to manage loading status and server errors
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const apiUrl = process.env.REACT_APP_API_URL; // API base URL
  const navigate = useNavigate(); // Hook for navigation

  // Form submission handler
  const onSubmit: SubmitHandler<User> = async (data) => {
    setLoading(true);
    setServerError(null);

    try {
      // Register the user
      const response = await axios.post<RegisterResponse>(
        `${apiUrl}/api/users`,
        data
      );
      reset();

      try {
        // Log in the user immediately after registration
        const response = await axios.post<AuthResponse>(`${apiUrl}/api/login`, {
          email: data.email,
          password: data.password,
        });
        login(response.data.token);
        reset(); // Clear form fields
        toast.success("Registrado com sucesso!", { duration: 2000 });
        navigate("/");
      } catch (error: any) {
        setServerError(error.response?.data?.message || "Falha no login.");
      }
    } catch (error: any) {
      console.error("Error details:", error);
      setServerError(
        error.response?.data?.message ||
          "Falha no registro. Por favor, tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };
  // Handler for cancel action
  const handleCancel = () => {
    navigate("/");
  };

  return {
    register,
    handleSubmit,
    handleCancel,
    errors,
    loading,
    serverError,
    onSubmit,
  };
};
