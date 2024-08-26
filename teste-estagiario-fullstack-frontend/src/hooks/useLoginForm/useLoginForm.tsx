import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { User, AuthResponse } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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

  const apiUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

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
