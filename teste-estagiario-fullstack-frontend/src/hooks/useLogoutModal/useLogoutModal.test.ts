// src/hooks/useLogoutModal.test.ts
import useLogoutModal from "./useLogoutModal";
import { useAuth } from "../../context/AuthContext";
import { renderHook, waitFor } from "@testing-library/react";

// Mock useAuth from AuthContext
jest.mock("../../context/AuthContext");

describe("useLogoutModal", () => {
  const mockLogout = jest.fn();
  const mockUserName = "John Doe";

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      logout: mockLogout,
      userName: mockUserName,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return initial state correctly", () => {
    const { result } = renderHook(() => useLogoutModal());

    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.userName).toBe(mockUserName);
  });

  it("should open the modal when handleLogoutClick is called", async () => {
    const { result } = renderHook(() => useLogoutModal());

    await result.current.handleLogoutClick();

    await waitFor(() => {
      expect(result.current.isModalOpen).toBe(true);
    });
  });

  it("should call logout and close the modal when handleConfirmLogout is called", async () => {
    const { result } = renderHook(() => useLogoutModal());

    await result.current.handleConfirmLogout();

    expect(mockLogout).toHaveBeenCalled();
    expect(result.current.isModalOpen).toBe(false);
  });

  it("should close the modal when handleCancelLogout is called", async () => {
    const { result } = renderHook(() => useLogoutModal());

    await result.current.handleLogoutClick();

    await result.current.handleCancelLogout();

    expect(result.current.isModalOpen).toBe(false);
  });
});
