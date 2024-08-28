// src/pages/TaskPage/TaskPage.test.tsx
import "../../__mocks__/axios.mjs";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskPage from "./TaskPage";
import useTaskForm from "../../hooks/useTaskForm/useTaskForm";
import { TaskProvider } from "../../context/TaskContext";
import { AuthProvider } from "../../context/AuthContext";

// Mock the useTaskForm hook
jest.mock("../../hooks/useTaskForm/useTaskForm");

describe("TaskPage", () => {
  // Mock the return value of useTaskForm hook
  const mockOnSubmit = jest.fn();
  const mockReset = jest.fn();
  const mockUseTaskForm = useTaskForm as jest.Mock;

  beforeEach(() => {
    mockUseTaskForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((cb) => cb()),
      errors: {},
      onSubmit: mockOnSubmit,
      reset: mockReset,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Helper function to render the component with the TaskProvider
  const renderWithProvider = () => {
    return render(
      <AuthProvider>
        <TaskProvider>
          <TaskPage />
        </TaskProvider>
      </AuthProvider>
    );
  };

  test("renders TaskList by default", () => {
    renderWithProvider();

    expect(screen.getByTestId("page-container")).toBeInTheDocument();
    expect(screen.getByTestId("main-content")).toBeInTheDocument();
    expect(screen.getByTestId("task-list")).toBeInTheDocument();
    expect(screen.queryByTestId("task-form")).not.toBeInTheDocument();
  });

  test("renders TaskForm when showTaskForm is true", async () => {
    renderWithProvider();

    // Toggle to show TaskForm
    fireEvent.click(screen.getByTestId("floatingButtonButton"));

    await waitFor(() => {
      expect(screen.getByTestId("form-container")).toBeInTheDocument();
      expect(screen.queryByTestId("task-list")).not.toBeInTheDocument();
    });
  });

  test("toggles between TaskForm and TaskList", async () => {
    renderWithProvider();

    // Click to show TaskForm
    fireEvent.click(screen.getByTestId("floatingButtonButton"));

    await waitFor(() => {
      expect(screen.getByTestId("form-container")).toBeInTheDocument();
      expect(screen.queryByTestId("task-list")).not.toBeInTheDocument();
    });

    // Click again to hide TaskForm
    fireEvent.click(screen.getByTestId("cancel-button"));

    await waitFor(() => {
      expect(screen.queryByTestId("form-container")).not.toBeInTheDocument();
      expect(screen.getByTestId("task-list")).toBeInTheDocument();
    });
  });

  test("calls reset function when toggling views", () => {
    renderWithProvider();

    // Click to show TaskForm
    fireEvent.click(screen.getByTestId("floatingButtonButton"));

    // Click to hide TaskForm
    fireEvent.click(screen.getByTestId("cancel-button"));

    expect(mockReset).toHaveBeenCalled();
  });

  test("calls onSubmit function when form is submitted", async () => {
    renderWithProvider();

    // Show TaskForm
    fireEvent.click(screen.getByTestId("floatingButtonButton"));

    await waitFor(() => {
      // Fill out the form fields
      fireEvent.change(screen.getByTestId("input-title"), {
        target: { value: "Task Title" },
      });
      fireEvent.change(screen.getByTestId("textarea-description"), {
        target: { value: "Task Description" },
      });
    });

    // Simulate form submission
    await waitFor(() => {
      fireEvent.submit(screen.getByTestId("form-container"));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
