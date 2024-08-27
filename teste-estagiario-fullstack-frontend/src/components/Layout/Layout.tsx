// src/components/Layout/Layout.tsx

import {
  Container,
  Header,
  Footer,
  MainContent,
  LogoutButton,
  LogoutIcon,
  UserName,
} from "./Layout.styles";
import { RiLogoutCircleRLine } from "react-icons/ri";
import ConfirmLogoutModal from "../ConfirmLogoutModal/ConfirmLogoutModal";
import useLogoutModal from "../../hooks/useLogoutModal/useLogoutModal";
import { Toaster } from "sonner";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hook to manage logout modal state and logic
  const {
    isModalOpen,
    userName,
    handleLogoutClick,
    handleConfirmLogout,
    handleCancelLogout,
  } = useLogoutModal();

  return (
    <Container data-testid="container">
      <Header data-testid="header">
        {/* Display the logged-in user's name */}
        <UserName data-testid="user-name">{userName}</UserName>
        {/* Logout button with icon */}
        <LogoutButton data-testid="logout-button" onClick={handleLogoutClick}>
          <LogoutIcon data-testid="logout-icon">
            <RiLogoutCircleRLine />
          </LogoutIcon>
        </LogoutButton>
      </Header>
      {/* Main content area */}
      <MainContent data-testid="main-content">
        <Toaster position="top-center" richColors />
        {children}
      </MainContent>
      {/* Footer */}
      <Footer data-testid="footer">© 2024 Diego Mota.</Footer>
      {/* Confirmation modal for logout */}
      <ConfirmLogoutModal
        data-testid="confirm-logout-modal"
        isOpen={isModalOpen}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      />
    </Container>
  );
};

export default Layout;
