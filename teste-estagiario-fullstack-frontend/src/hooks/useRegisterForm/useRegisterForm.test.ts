// src/hooks/useRegisterForm/useRegisterForm.test.ts
import { useRegisterForm } from "./useRegisterForm";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { renderHook, waitFor } from "@testing-library/react";

// Mock dependencies
jest.mock("axios");
jest.mock("sonner");
jest.mock("../../context/AuthContext");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("useRegisterForm", () => {
  const mockLogin = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ login: mockLogin });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should handle registration and login successfully", async () => {
    const mockToken = "mock-token";
    const mockRegisterResponse = { data: { success: true } };
    const mockLoginResponse = { data: { token: mockToken } };
    (axios.post as jest.Mock)
      .mockResolvedValueOnce(mockRegisterResponse) // Registration
      .mockResolvedValueOnce(mockLoginResponse); // Login

    const { result } = renderHook(() => useRegisterForm());

    await result.current.onSubmit({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });

    await waitFor(() => {
      expect(axios.post).toHaveBeenNthCalledWith(
        1,
        `${process.env.REACT_APP_API_URL}/api/users`,
        {
          name: "Test User",
          email: "test@example.com",
          password: "password",
        }
      );

      expect(axios.post).toHaveBeenNthCalledWith(
        2,
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          email: "test@example.com",
          password: "password",
        }
      );

      expect(mockLogin).toHaveBeenCalledWith(mockToken);
      expect(toast.success).toHaveBeenCalledWith("Registrado com sucesso!", {
        duration: 2000,
      });
      expect(mockNavigate).toHaveBeenCalledWith("/");
      expect(result.current.loading).toBe(false);
      expect(result.current.serverError).toBe(null);
    });
  });

  it("should handle registration failure", async () => {
    const mockError = {
      response: { data: { message: "Email already in use" } },
    };
    (axios.post as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useRegisterForm());

    await result.current.onSubmit({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });

    await waitFor(() => {
      expect(result.current.serverError).toBe("Email already in use");
      expect(result.current.loading).toBe(false);
      expect(mockLogin).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  it("should handle login failure after successful registration", async () => {
    const mockRegisterResponse = { data: { success: true } };
    const mockLoginError = {
      response: { data: { message: "Invalid credentials" } },
    };
    (axios.post as jest.Mock)
      .mockResolvedValueOnce(mockRegisterResponse) // Registration
      .mockRejectedValueOnce(mockLoginError); // Login

    const { result } = renderHook(() => useRegisterForm());

    await result.current.onSubmit({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });

    await waitFor(() => {
      expect(result.current.serverError).toBe("Invalid credentials");
      expect(result.current.loading).toBe(false);
      expect(mockLogin).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  it("should navigate to home page on cancel", async () => {
    const { result } = renderHook(() => useRegisterForm());

    await result.current.handleCancel();

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
