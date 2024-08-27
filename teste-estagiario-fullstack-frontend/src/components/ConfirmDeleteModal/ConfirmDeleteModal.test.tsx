import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

describe("ConfirmDeleteModal", () => {
  it("renders correctly when open", () => {
    const mockOnClose = jest.fn();
    const mockOnConfirm = jest.fn();

    render(
      <ConfirmDeleteModal
        isOpen={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByTestId("modal-title")).toHaveTextContent(
      "Confirmar exclusão"
    );
    expect(screen.getByTestId("modal-message")).toHaveTextContent(
      "Tem certeza de que deseja excluir esta tarefa?"
    );
    expect(screen.getByTestId("confirm-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
  });

  it("calls onConfirm when confirm button is clicked", () => {
    const mockOnClose = jest.fn();
    const mockOnConfirm = jest.fn();

    render(
      <ConfirmDeleteModal
        isOpen={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.click(screen.getByTestId("confirm-button"));
    expect(mockOnConfirm).toHaveBeenCalled();
  });

  it("calls onClose when cancel button is clicked", () => {
    const mockOnClose = jest.fn();
    const mockOnConfirm = jest.fn();

    render(
      <ConfirmDeleteModal
        isOpen={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.click(screen.getByTestId("cancel-button"));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
