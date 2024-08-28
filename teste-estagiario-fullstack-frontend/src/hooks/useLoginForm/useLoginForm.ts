//src/hooks/useLoginForm/useLoginForm.ts
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { User, AuthResponse } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Custom hook for handling login form logic
export const useLoginForm = () => {
  // Initialize react-hook-form to manage form state
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  // Access the login function from AuthContext to manage authentication
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Base API URL from environment variables
  const apiUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmit: SubmitHandler<User> = async (data) => {
    setLoading(true);
    setServerError(null);

    try {
      const response = await axios.post<AuthResponse>(
        `${apiUrl}/api/login`,
        data
      );
      login(response.data.token);
      reset();
      navigate("/");
    } catch (error: any) {
      setServerError(
        error.response?.data?.message ||
          "Falha no login. Por favor, verifique suas credenciais."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return {
    register,
    handleSubmit,
    handleRegisterClick,
    errors,
    loading,
    serverError,
    onSubmit,
  };
};
