// src/hooks/useTaskForm/useTaskForm.test.ts
import { useTasks } from "../../context/TaskContext";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";
import { renderHook } from "@testing-library/react";
import useTaskForm from "./useTaskForm";
import { NewTask } from "../../types";

// Mock dependencies
jest.mock("../../context/TaskContext");
jest.mock("../../context/AuthContext");
jest.mock("sonner");

describe("useTaskForm", () => {
  const mockAddTask = jest.fn();
  const mockOnTaskAdded = jest.fn();
  const mockUserId = 1;

  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({ addTask: mockAddTask });
    (useAuth as jest.Mock).mockReturnValue({ userId: mockUserId });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should add a new task and show a success message", async () => {
    const { result } = renderHook(() => useTaskForm(mockOnTaskAdded));

    const taskData = {
      title: "New Task",
      description: "Task description",
    };

    await result.current.onSubmit(taskData);

    const expectedTask: NewTask = {
      ...taskData,
      completed: false,
      userId: mockUserId,
    };

    expect(mockAddTask).toHaveBeenCalledWith(expectedTask);
    expect(mockOnTaskAdded).toHaveBeenCalled();
    expect(result.current.errors).toEqual({});
    expect(toast.success).toHaveBeenCalledWith(" Tarefa Criada com Sucesso! ", {
      duration: 2000,
    });
  });

  it("should not add a task if userId is not available", async () => {
    (useAuth as jest.Mock).mockReturnValue({ userId: null });

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    const { result } = renderHook(() => useTaskForm(mockOnTaskAdded));

    const taskData = {
      title: "New Task",
      description: "Task description",
    };

    await result.current.onSubmit(taskData);

    expect(mockAddTask).not.toHaveBeenCalled();
    expect(mockOnTaskAdded).not.toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "O ID do usuário não está disponível"
    );
    expect(toast.success).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  it("should reset the form after successful task addition", async () => {
    const { result } = renderHook(() => useTaskForm(mockOnTaskAdded));

    const taskData = {
      title: "New Task",
      description: "Task description",
    };

    await result.current.onSubmit(taskData);

    // Ensure form is reset after submission
    expect(result.current.errors).toEqual({});
    expect(mockAddTask).toHaveBeenCalled();
    expect(mockOnTaskAdded).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith(" Tarefa Criada com Sucesso! ", {
      duration: 2000,
    });
  });
});
