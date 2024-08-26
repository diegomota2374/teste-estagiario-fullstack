import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { User, RegisterResponse } from "../../types";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = async (data) => {
    setLoading(true);
    setServerError(null);

    try {
      const response = await axios.post<RegisterResponse>(
        `${apiUrl}/api/users`,
        data
      );
      console.log("Response:", response);
      alert(response.data.message);
      reset(); // Reset form fields after successful submission
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

  const handleCancel = () => {
    navigate("/"); // Redirect to the homepage or another route
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
