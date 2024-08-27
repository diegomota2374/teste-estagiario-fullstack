import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskItem from "./TaskItem";
import { Task } from "../../services/taskService";
import useTaskItem from "../../hooks/useTaskItem/useTaskItem";

// Mock the useTaskItem hook
jest.mock("../../hooks/useTaskItem/useTaskItem");

// Mock functions and data
const mockOnSubmit = jest.fn();
const mockHandleCancel = jest.fn();
const mockHandleDeleteClick = jest.fn();
const mockHandleConfirmDelete = jest.fn();
const mockHandleCancelDelete = jest.fn();
const mockHandleToggleComplete = jest.fn();
const mockHandleDescriptionClick = jest.fn();
const mockHandleEditClick = jest.fn();

const mockTask: Task = {
  id: 1,
  userId: 1,
  title: "Test Task",
  description: "Test Description",
  completed: false,
};

const setup = (isEditing = false, isModalOpen = false) => {
  (useTaskItem as jest.Mock).mockReturnValue({
    isModalOpen,
    register: jest.fn(),
    handleSubmit: (callback: any) =>
      jest.fn().mockImplementation(() => callback()), // Ensure handleSubmit calls the provided callback
    errors: {},
    handleCancel: mockHandleCancel,
    handleDeleteClick: mockHandleDeleteClick,
    handleConfirmDelete: mockHandleConfirmDelete,
    handleCancelDelete: mockHandleCancelDelete,
    handleToggleComplete: mockHandleToggleComplete,
    handleDescriptionClick: mockHandleDescriptionClick,
    showFullDescription: false,
    handleEditClick: mockHandleEditClick,
    onSubmit: mockOnSubmit,
    isEditing,
  });

  render(<TaskItem task={mockTask} />);
};

describe("TaskItem", () => {
  test("renders form with correct elements when in editing mode", () => {
    setup(true);

    expect(screen.getByTestId("edit-form")).toBeInTheDocument();
    expect(screen.getByTestId("task-input-title")).toBeInTheDocument();
    expect(screen.getByTestId("task-textarea-description")).toBeInTheDocument();
    expect(screen.getByTestId("save-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
  });

  test("renders task details when not in editing mode", () => {
    setup();

    expect(screen.getByTestId("task-title")).toHaveTextContent("Test Task");
    expect(screen.getByTestId("task-description")).toHaveTextContent(
      "Test Description"
    );
    expect(screen.getByTestId("edit-button")).toBeInTheDocument();
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
  });

  test("calls onSubmit when the form is submitted", async () => {
    setup(true);

    fireEvent.click(screen.getByTestId("save-button"));

    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalled());
  });

  test("calls handleCancel when cancel button is clicked", () => {
    setup(true);

    fireEvent.click(screen.getByTestId("cancel-button"));

    expect(mockHandleCancel).toHaveBeenCalled();
  });

  test("calls handleEditClick when edit button is clicked", () => {
    setup();

    fireEvent.click(screen.getByTestId("edit-button"));

    expect(mockHandleEditClick).toHaveBeenCalled();
  });

  test("calls handleDeleteClick when delete button is clicked", () => {
    setup();

    fireEvent.click(screen.getByTestId("delete-button"));

    expect(mockHandleDeleteClick).toHaveBeenCalled();
  });

  test("calls handleConfirmDelete when confirm delete modal is confirmed", async () => {
    setup(false, true); // Ensure the modal is open

    fireEvent.click(screen.getByTestId("delete-button"));

    // Wait for the modal to appear
    await waitFor(() => {
      expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("confirm-button"));

    expect(mockHandleConfirmDelete).toHaveBeenCalled();
  });

  test("calls handleCancelDelete when delete modal is canceled", async () => {
    setup(false, true); // Ensure the modal is open

    fireEvent.click(screen.getByTestId("delete-button"));

    // Wait for the modal to appear
    await waitFor(() => {
      expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("cancel-button"));

    expect(mockHandleCancelDelete).toHaveBeenCalled();
  });
});
