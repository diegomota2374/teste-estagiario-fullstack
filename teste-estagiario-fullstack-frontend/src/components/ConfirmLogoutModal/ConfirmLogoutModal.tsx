// src/components/ConfirmLogoutModal/ConfirmLogoutModal.tsx
import { ConfirmModalProps } from "../../types";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./ConfirmLogoutModal.styles";

const ConfirmLogoutModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  // Return null if the modal is not open
  if (!isOpen) return null;

  return (
    <ModalOverlay data-testid="modal-overlay">
      <ModalContent data-testid="modal-content">
        <ModalTitle data-testid="modal-title">Confirmar logout</ModalTitle>
        <p data-testid="modal-message">Tem certeza de que deseja sair?</p>
        <ButtonContainer data-testid="button-container">
          {/* Button to confirm logout */}
          <ConfirmButton data-testid="confirm-button" onClick={onConfirm}>
            Sair
          </ConfirmButton>
          {/* Button to cancel logout */}
          <CancelButton data-testid="cancel-button" onClick={onClose}>
            Cancelar
          </CancelButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmLogoutModal;
