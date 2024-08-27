// src/components/TaskForm/TaskForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useForm, SubmitHandler } from "react-hook-form";
import TaskForm from "./TaskForm";
import { TaskFormInputs } from "../../types";

// Mock data
const mockOnSubmit = jest.fn();
const mockOnBack = jest.fn();

jest.mock("react-hook-form", () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn(
      (callback: SubmitHandler<TaskFormInputs>) =>
        (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          callback({
            title: "Sample Title",
            description: "Sample Description",
          });
        }
    ),
    formState: {
      errors: {},
    },
  }),
}));

describe("TaskForm", () => {
  // Render the component with the mocked hook
  const renderComponent = (errors: any = {}) => {
    return render(
      <TaskForm
        register={useForm<TaskFormInputs>().register}
        handleSubmit={useForm<TaskFormInputs>().handleSubmit}
        errors={errors}
        onSubmit={mockOnSubmit}
        onBack={mockOnBack}
      />
    );
  };

  test("renders form with correct elements", () => {
    renderComponent();
    // Check if form elements are rendered with the correct data-testid
    expect(screen.getByTestId("form-container")).toBeInTheDocument();
    expect(screen.getByTestId("form-title")).toHaveTextContent(
      "Adicionar Nova Tarefa"
    );
    expect(screen.getByTestId("input-title")).toBeInTheDocument();
    expect(screen.getByTestId("textarea-description")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
  });

  test("displays error messages when validation fails", () => {
    // Simulate validation errors
    const errors = {
      title: { message: "O título é obrigatório" },
      description: { message: "A descrição é obrigatória" },
    };

    // Re-render the component with errors
    renderComponent(errors);

    // Check for error messages
    expect(screen.getByTestId("error-title")).toHaveTextContent(
      "O título é obrigatório"
    );
    expect(screen.getByTestId("error-description")).toHaveTextContent(
      "A descrição é obrigatória"
    );
  });

  test("calls onSubmit when the form is submitted", async () => {
    renderComponent();

    // Simulate form submission
    fireEvent.submit(screen.getByTestId("form"));

    // Check if onSubmit is called
    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalled());
  });

  test("calls onBack when the cancel button is clicked", () => {
    renderComponent();

    // Simulate cancel button click
    fireEvent.click(screen.getByTestId("cancel-button"));

    // Check if onBack is called
    expect(mockOnBack).toHaveBeenCalled();
  });
});
