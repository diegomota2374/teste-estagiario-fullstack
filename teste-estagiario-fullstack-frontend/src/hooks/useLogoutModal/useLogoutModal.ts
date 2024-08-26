// src/hooks/useLogoutModal.ts
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const useLogoutModal = () => {
  const { logout, userName } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setIsModalOpen(false);
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    userName,
    handleLogoutClick,
    handleConfirmLogout,
    handleCancelLogout,
  };
};

export default useLogoutModal;
