// src/components/ConfirmLogoutModal/ConfirmLogoutModal.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConfirmLogoutModal from "./ConfirmLogoutModal";

describe("ConfirmLogoutModal", () => {
  // Test if the modal renders when open
  it("renders correctly when open", () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <ConfirmLogoutModal
        isOpen={true}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );

    // Assert modal elements are in the document
    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByTestId("modal-title")).toHaveTextContent(
      "Confirmar logout"
    );
    expect(screen.getByTestId("modal-message")).toHaveTextContent(
      "Tem certeza de que deseja sair?"
    );
    expect(screen.getByTestId("confirm-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
  });

  // Test if the modal does not render when closed
  it("does not render when closed", () => {
    const { container } = render(
      <ConfirmLogoutModal
        isOpen={false}
        onClose={() => {}}
        onConfirm={() => {}}
      />
    );

    // Assert modal elements are not in the document
    expect(screen.queryByTestId("modal-overlay")).toBeNull();
    expect(screen.queryByTestId("modal-content")).toBeNull();
    expect(screen.queryByTestId("modal-title")).toBeNull();
    expect(screen.queryByTestId("modal-message")).toBeNull();
    expect(screen.queryByTestId("confirm-button")).toBeNull();
    expect(screen.queryByTestId("cancel-button")).toBeNull();
  });

  // Test if the confirm button triggers the onConfirm callback
  it("triggers onConfirm when the confirm button is clicked", () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <ConfirmLogoutModal
        isOpen={true}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );
    fireEvent.click(screen.getByTestId("confirm-button"));

    // Assert onConfirm callback is called
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  // Test if the cancel button triggers the onClose callback
  it("triggers onClose when the cancel button is clicked", () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <ConfirmLogoutModal
        isOpen={true}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    );
    fireEvent.click(screen.getByTestId("cancel-button"));

    // Assert onClose callback is called
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
