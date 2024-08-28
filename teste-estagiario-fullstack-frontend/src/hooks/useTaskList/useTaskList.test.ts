// src/hooks/useTaskList/useTaskList.test.ts
import { useTaskList } from "./useTaskList";
import { updateTask, getTaskById } from "../../services/taskService";
import { useTasks } from "../../context/TaskContext";
import { renderHook, waitFor } from "@testing-library/react";

// Mock the dependencies
jest.mock("../../services/taskService");
jest.mock("../../context/TaskContext");

describe("useTaskList", () => {
  const mockEditTask = jest.fn();
  const taskId = 1;
  const initialTitle = "Initial Title";
  const initialDescription = "Initial Description";

  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({ editTask: mockEditTask });
    (updateTask as jest.Mock).mockResolvedValue({
      title: "New Title",
      description: "New Description",
    });
    // Mock getTaskById to return a task with a completion status
    (getTaskById as jest.Mock).mockResolvedValue({
      id: taskId,
      title: initialTitle,
      description: initialDescription,
      completed: false,
    });
  });

  it("should toggle task completion status", async () => {
    const mockTask = { id: taskId, completed: false };
    const mockUpdatedTask = { id: taskId, completed: true };

    (getTaskById as jest.Mock).mockResolvedValue(mockTask);
    (updateTask as jest.Mock).mockResolvedValue(mockUpdatedTask);

    const { result } = renderHook(() =>
      useTaskList({ taskId, initialTitle, initialDescription })
    );

    await result.current.handleToggleComplete();

    expect(getTaskById).toHaveBeenCalledWith(taskId);
    expect(updateTask).toHaveBeenCalledWith(taskId, { completed: true });
    expect(mockEditTask).toHaveBeenCalledWith(taskId, { completed: true });
  });

  it("should enter and exit editing mode", async () => {
    const { result } = renderHook(() =>
      useTaskList({ taskId, initialTitle, initialDescription })
    );

    result.current.handleEditClick();

    await waitFor(() => {
      expect(result.current.isEditing).toBe(true);
    });

    await result.current.handleSaveClick("New Title", "New Description");

    expect(updateTask).toHaveBeenCalledWith(taskId, {
      title: "New Title",
      description: "New Description",
    });

    await waitFor(() => {
      expect(result.current.isEditing).toBe(false);
    });

    expect(mockEditTask).toHaveBeenCalledWith(taskId, {
      title: "New Title",
      description: "New Description",
    });
  });

  it("should cancel editing and reset to initial values", async () => {
    const { result } = renderHook(() =>
      useTaskList({ taskId, initialTitle, initialDescription })
    );

    await result.current.handleEditClick();

    await result.current.handleCancelClick();

    expect(result.current.isEditing).toBe(false);
    expect(result.current.editedTitle).toBe(initialTitle);
    expect(result.current.editedDescription).toBe(initialDescription);
  });

  it("should handle save click and update task", async () => {
    const mockUpdatedTask = {
      id: taskId,
      title: "Updated Title",
      description: "Updated Description",
    };

    (updateTask as jest.Mock).mockResolvedValue(mockUpdatedTask);

    const { result } = renderHook(() =>
      useTaskList({ taskId, initialTitle, initialDescription })
    );

    await result.current.handleSaveClick(
      "Updated Title",
      "Updated Description"
    );

    expect(updateTask).toHaveBeenCalledWith(taskId, {
      title: "Updated Title",
      description: "Updated Description",
    });
    expect(mockEditTask).toHaveBeenCalledWith(taskId, {
      title: "Updated Title",
      description: "Updated Description",
    });

    await waitFor(() => {
      expect(result.current.editedTitle).toBe("Updated Title");
      expect(result.current.editedDescription).toBe("Updated Description");
    });
  });
});
