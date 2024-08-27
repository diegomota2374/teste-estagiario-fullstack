// src/components/Layout/Layout.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Layout from "./Layout";
import useLogoutModal from "../../hooks/useLogoutModal/useLogoutModal";

// Mock the useLogoutModal hook
jest.mock("../../hooks/useLogoutModal/useLogoutModal", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Layout", () => {
  // Mock implementation for the hook
  const mockHandleLogoutClick = jest.fn();
  const mockHandleConfirmLogout = jest.fn();
  const mockHandleCancelLogout = jest.fn();

  beforeEach(() => {
    // Set up the mock implementation
    (useLogoutModal as jest.Mock).mockReturnValue({
      isModalOpen: false,
      userName: "John Doe",
      handleLogoutClick: mockHandleLogoutClick,
      handleConfirmLogout: mockHandleConfirmLogout,
      handleCancelLogout: mockHandleCancelLogout,
    });
  });

  it("should render user name and logout button", () => {
    render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );

    // Check if the user name is rendered
    expect(screen.getByTestId("user-name")).toHaveTextContent("John Doe");
    // Check if the logout button is rendered
    expect(screen.getByTestId("logout-button")).toBeInTheDocument();
  });

  it("should open logout modal on logout button click", () => {
    // Update the hook to show the modal
    (useLogoutModal as jest.Mock).mockReturnValue({
      isModalOpen: true,
      userName: "John Doe",
      handleLogoutClick: mockHandleLogoutClick,
      handleConfirmLogout: mockHandleConfirmLogout,
      handleCancelLogout: mockHandleCancelLogout,
    });

    render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );

    // Click the logout button
    fireEvent.click(screen.getByTestId("logout-button"));

    // Check if the modal is rendered
    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
  });

  it("should call handleConfirmLogout when confirm button is clicked", () => {
    // Update the hook to show the modal
    (useLogoutModal as jest.Mock).mockReturnValue({
      isModalOpen: true,
      userName: "John Doe",
      handleLogoutClick: mockHandleLogoutClick,
      handleConfirmLogout: mockHandleConfirmLogout,
      handleCancelLogout: mockHandleCancelLogout,
    });

    render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );

    // Click the confirm button in the modal
    fireEvent.click(screen.getByTestId("confirm-button"));

    // Check if the confirm handler was called
    expect(mockHandleConfirmLogout).toHaveBeenCalled();
  });

  it("should call handleCancelLogout when cancel button is clicked", () => {
    // Update the hook to show the modal
    (useLogoutModal as jest.Mock).mockReturnValue({
      isModalOpen: true,
      userName: "John Doe",
      handleLogoutClick: mockHandleLogoutClick,
      handleConfirmLogout: mockHandleConfirmLogout,
      handleCancelLogout: mockHandleCancelLogout,
    });

    render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    );

    // Click the cancel button in the modal
    fireEvent.click(screen.getByTestId("cancel-button"));

    // Check if the cancel handler was called
    expect(mockHandleCancelLogout).toHaveBeenCalled();
  });
});
