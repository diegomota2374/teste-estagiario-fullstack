// src/hooks/useLoginForm/useLoginForm.test.ts
import { useLoginForm } from "./useLoginForm";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { act, renderHook } from "@testing-library/react";

// Mock dependencies
jest.mock("axios");
jest.mock("../../context/AuthContext");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Define the test suite for the useLoginForm hook
describe("useLoginForm", () => {
  const mockLogin = jest.fn();
  const mockNavigate = jest.fn();

  // Set up the mocks before each test
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ login: mockLogin });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should handle form submission successfully", async () => {
    const mockToken = "mock-token";
    const mockResponse = { data: { token: mockToken } };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useLoginForm());

    await result.current.onSubmit({
      email: "test@example.com",
      password: "password",
    });

    expect(axios.post).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/api/login`,
      { email: "test@example.com", password: "password" }
    );
    expect(mockLogin).toHaveBeenCalledWith(mockToken);
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(result.current.loading).toBe(false);
    expect(result.current.serverError).toBe(null);
  });

  it("should handle form submission failure", async () => {
    const mockError = {
      response: { data: { message: "Invalid credentials" } },
    };
    (axios.post as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useLoginForm());

    await result.current.onSubmit({
      email: "test@example.com",
      password: "wrongPassword",
    });

    expect(result.current.serverError).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(mockLogin).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("should navigate to register page on handleRegisterClick", () => {
    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.handleRegisterClick();
    });

    expect(mockNavigate).toHaveBeenCalledWith("/register");
  });
});
