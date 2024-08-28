// src/components/TaskCheckboxLabel/TaskCheckboxLabel.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskCheckboxLabel from "./TaskCheckBoxLabel";

describe("TaskCheckboxLabel", () => {
  it("should display loading text when clicked", async () => {
    const mockOnChange = jest.fn().mockResolvedValueOnce(undefined); // Simulate a successful async function

    render(<TaskCheckboxLabel checked={false} onChange={mockOnChange} />);

    const button = screen.getByTestId("task-checkbox-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId("loading-text")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.queryByTestId("loading-text")).not.toBeInTheDocument();
    });
  });

  it("should display 'Completo' when checked", () => {
    const mockOnChange = jest.fn();

    render(<TaskCheckboxLabel checked={true} onChange={mockOnChange} />);

    const button = screen.getByTestId("task-checkbox-button");
    expect(screen.getByTestId("completed-text")).toBeInTheDocument();
  });

  it("should display 'Pendente' when not checked", () => {
    const mockOnChange = jest.fn();

    render(<TaskCheckboxLabel checked={false} onChange={mockOnChange} />);

    const button = screen.getByTestId("task-checkbox-button");
    expect(screen.getByTestId("pending-text")).toBeInTheDocument();
  });
});
