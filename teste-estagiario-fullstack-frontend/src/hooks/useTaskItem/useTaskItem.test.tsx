// src/hooks/useTaskItem.test.ts
import { useTasks } from "../../context/TaskContext";
import { useTaskList } from "../../hooks/useTaskList/useTaskList";
import { toast } from "sonner";
import { Task } from "../../services/taskService";
import { renderHook, waitFor } from "@testing-library/react";
import useTaskItem from "./useTaskItem";

// Mock dependencies
jest.mock("../../context/TaskContext");
jest.mock("../../hooks/useTaskList/useTaskList");
jest.mock("sonner");

describe("useTaskItem", () => {
  const mockTask: Task = {
    id: 1,
    title: "Test Task",
    description: "Test Description",
    completed: false,
    userId: 1,
  };

  const mockRemoveTask = jest.fn();
  const mockHandleSaveClick = jest.fn();
  const mockHandleToggleComplete = jest.fn();
  const mockHandleEditClick = jest.fn();
  const mockHandleCancelClick = jest.fn();

  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({
      removeTask: mockRemoveTask,
    });

    (useTaskList as jest.Mock).mockReturnValue({
      isEditing: false,
      handleToggleComplete: mockHandleToggleComplete,
      editedTitle: mockTask.title,
      editedDescription: mockTask.description,
      handleEditClick: mockHandleEditClick,
      handleSaveClick: mockHandleSaveClick,
      handleCancelClick: mockHandleCancelClick,
    });

    (toast.success as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should handle form submission successfully", async () => {
    const { result } = renderHook(() => useTaskItem({ task: mockTask }));

    await result.current.onSubmit({
      title: "Updated Title",
      description: "Updated Description",
    });

    expect(mockHandleSaveClick).toHaveBeenCalledWith(
      "Updated Title",
      "Updated Description"
    );
    expect(toast.success).toHaveBeenCalledWith("Tarefa Editada com Sucesso!", {
      duration: 2000,
    });
  });

  it("should open and close the delete confirmation modal", async () => {
    const { result } = renderHook(() => useTaskItem({ task: mockTask }));

    await result.current.handleDeleteClick();

    await waitFor(() => {
      expect(result.current.isModalOpen).toBe(true);
    });

    await result.current.handleCancelDelete();
    await waitFor(() => {
      expect(result.current.isModalOpen).toBe(false);
    });
  });

  it("should delete the task successfully", async () => {
    const { result } = renderHook(() => useTaskItem({ task: mockTask }));

    await result.current.handleDeleteClick();

    await waitFor(() => {
      expect(result.current.isModalOpen).toBe(true);
    });

    await result.current.handleConfirmDelete();

    expect(mockRemoveTask).toHaveBeenCalledWith(mockTask.id);
    expect(toast.success).toHaveBeenCalledWith("Tarefa Excluida com Sucesso!", {
      duration: 2000,
    });
    await waitFor(() => {
      expect(result.current.isModalOpen).toBe(false);
    });
  });

  it("should toggle the description view", async () => {
    const { result } = renderHook(() => useTaskItem({ task: mockTask }));

    await result.current.handleDescriptionClick();

    await waitFor(() => {
      expect(result.current.showFullDescription).toBe(true);
    });

    await result.current.handleDescriptionClick();

    await waitFor(() => {
      expect(result.current.showFullDescription).toBe(false);
    });
  });

  it("should handle task editing", async () => {
    const { result } = renderHook(() => useTaskItem({ task: mockTask }));

    await result.current.handleEditClick();

    expect(mockHandleEditClick).toHaveBeenCalled();
  });

  it("should cancel editing and reset form", async () => {
    const { result } = renderHook(() => useTaskItem({ task: mockTask }));

    await result.current.handleCancel();

    expect(mockHandleCancelClick).toHaveBeenCalled();
    expect(result.current.errors).toEqual({});
  });
});
