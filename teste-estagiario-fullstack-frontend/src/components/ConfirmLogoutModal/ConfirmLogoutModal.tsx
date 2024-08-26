// src/components/ConfirmLogoutModal/ConfirmLogoutModal.tsx
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./ConfirmLogoutModal.styles";

interface ConfirmLogoutModalProps {
  isOpen: boolean; // Controls whether the modal is visible or not
  onClose: () => void; // Function to close the modal
  onConfirm: () => void; // Function to confirm logout
}

const ConfirmLogoutModal: React.FC<ConfirmLogoutModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  // Return null if the modal is not open
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Confirmar logout</ModalTitle>
        <p>Tem certeza de que deseja sair?</p>
        <ButtonContainer>
          {/* Button to confirm logout */}
          <ConfirmButton onClick={onConfirm}>Sair</ConfirmButton>
          {/* Button to cancel logout */}
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmLogoutModal;
