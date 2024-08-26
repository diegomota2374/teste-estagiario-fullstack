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
    <Container>
      <Header>
        {/* Display the logged-in user's name */}
        <UserName>{userName}</UserName>
        {/* Logout button with icon */}
        <LogoutButton onClick={handleLogoutClick}>
          <LogoutIcon>
            <RiLogoutCircleRLine />
          </LogoutIcon>
        </LogoutButton>
      </Header>
      {/* Main content area */}
      <MainContent>{children}</MainContent>
      {/* Footer */}
      <Footer>© 2024 Diego Mota. </Footer>
      {/* Confirmation modal for logout */}
      <ConfirmLogoutModal
        isOpen={isModalOpen}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      />
    </Container>
  );
};

export default Layout;
