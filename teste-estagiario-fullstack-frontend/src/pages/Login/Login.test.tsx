// src/components/Login/Login.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";
import { useLoginForm } from "../../hooks/useLoginForm/useLoginForm";
import { jest } from "@jest/globals";

// Mock the useLoginForm hook
jest.mock("../../hooks/useLoginForm/useLoginForm");

const mockUseLoginForm = useLoginForm as jest.Mock;

describe("Login Component", () => {
  beforeEach(() => {
    // Reset the mock before each test
    mockUseLoginForm.mockReset();
  });

  it("should render the login form correctly", () => {
    // Mock implementation of useLoginForm
    mockUseLoginForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleRegisterClick: jest.fn(),
      errors: {},
      loading: false,
      serverError: null,
      onSubmit: jest.fn(),
    });

    render(<Login />);

    // Check if the title is rendered
    expect(screen.getByTestId("login-title")).toHaveTextContent("Task Manager");

    // Check if form elements are rendered
    expect(screen.getByTestId("email-label")).toHaveTextContent("Email:");
    expect(screen.getByTestId("password-label")).toHaveTextContent("Senha:");
    expect(screen.getByTestId("submit-button")).toHaveTextContent("Login");
    expect(screen.getByTestId("register-button")).toHaveTextContent(
      "Não tem uma conta? Cadastre-se aqui."
    );
  });

  it("should show validation errors when form inputs are invalid", async () => {
    // Mock implementation of useLoginForm
    mockUseLoginForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleRegisterClick: jest.fn(),
      errors: {
        email: { message: "O e-mail é obrigatório" },
        password: { message: "A senha é obrigatória" },
      },
      loading: false,
      serverError: null,
      onSubmit: jest.fn(),
    });

    render(<Login />);

    // Check if error messages are displayed
    expect(screen.getByTestId("email-error")).toHaveTextContent(
      "O e-mail é obrigatório"
    );
    expect(screen.getByTestId("password-error")).toHaveTextContent(
      "A senha é obrigatória"
    );
  });

  it("should handle form submission and call onSubmit", async () => {
    const mockOnSubmit = jest.fn();
    mockUseLoginForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleRegisterClick: jest.fn(),
      errors: {},
      loading: false,
      serverError: null,
      onSubmit: mockOnSubmit,
    });

    render(<Login />);

    // Trigger form submission
    fireEvent.click(screen.getByTestId("submit-button"));

    // Check if onSubmit was called
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  it("should handle server error message", () => {
    // Mock implementation of useLoginForm
    mockUseLoginForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleRegisterClick: jest.fn(),
      errors: {},
      loading: false,
      serverError: "Erro no servidor",
      onSubmit: jest.fn(),
    });

    render(<Login />);

    // Check if server error message is displayed
    expect(screen.getByTestId("server-error")).toHaveTextContent(
      "Erro no servidor"
    );
  });

  it("should handle register button click", () => {
    const mockHandleRegisterClick = jest.fn();
    mockUseLoginForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleRegisterClick: mockHandleRegisterClick,
      errors: {},
      loading: false,
      serverError: null,
      onSubmit: jest.fn(),
    });

    render(<Login />);

    // Trigger register button click
    fireEvent.click(screen.getByTestId("register-button"));

    // Check if handleRegisterClick was called
    expect(mockHandleRegisterClick).toHaveBeenCalled();
  });
});
