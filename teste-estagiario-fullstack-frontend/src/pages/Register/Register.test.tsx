import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "./Register";
import { useRegisterForm } from "../../hooks/useRegisterForm/useRegisterForm";

// Mock the custom hook
jest.mock("../../hooks/useRegisterForm/useRegisterForm", () => ({
  useRegisterForm: jest.fn(),
}));

describe("Register Component", () => {
  beforeEach(() => {
    (useRegisterForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleCancel: jest.fn(),
      errors: {},
      loading: false,
      serverError: null,
      onSubmit: jest.fn(),
    });
  });

  it("should render the Register container", () => {
    render(<Register />);
    expect(screen.getByTestId("register-container-page")).toBeInTheDocument();
    expect(screen.getByTestId("register-container")).toBeInTheDocument();
  });

  it("should display the title", () => {
    render(<Register />);
    expect(screen.getByTestId("register-title")).toHaveTextContent(
      "Task Manager"
    );
  });

  it("should render the form", () => {
    render(<Register />);
    expect(screen.getByTestId("register-form")).toBeInTheDocument();
  });

  it("should show error message for invalid name", async () => {
    (useRegisterForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleCancel: jest.fn(),
      errors: { name: { message: "O nome é obrigatório" } },
      loading: false,
      serverError: null,
      onSubmit: jest.fn(),
    });

    render(<Register />);
    expect(screen.getByTestId("name-error")).toHaveTextContent(
      "O nome é obrigatório"
    );
  });

  it("should call onSubmit function when form is submitted", async () => {
    const mockOnSubmit = jest.fn();
    (useRegisterForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleCancel: jest.fn(),
      errors: {},
      loading: false,
      serverError: null,
      onSubmit: mockOnSubmit,
    });

    render(<Register />);
    fireEvent.click(screen.getByTestId("submit-button"));
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  it("should call handleCancel when Cancel button is clicked", () => {
    const mockHandleCancel = jest.fn();
    (useRegisterForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleCancel: mockHandleCancel,
      errors: {},
      loading: false,
      serverError: null,
      onSubmit: jest.fn(),
    });

    render(<Register />);
    fireEvent.click(screen.getByTestId("cancel-button"));
    expect(mockHandleCancel).toHaveBeenCalled();
  });

  it("should show server error message", () => {
    (useRegisterForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      handleCancel: jest.fn(),
      errors: {},
      loading: false,
      serverError: "Erro ao registrar",
      onSubmit: jest.fn(),
    });

    render(<Register />);
    expect(screen.getByTestId("server-error")).toHaveTextContent(
      "Erro ao registrar"
    );
  });
});
