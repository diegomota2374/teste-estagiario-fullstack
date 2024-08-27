// src/components/ConfirmDeleteModal/ConfirmDeleteModal.tsx
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./ConfirmDeleteModal.styles";
import { ConfirmModalProps } from "../../types";

const ConfirmDeleteModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  // If the modal is not open, return null to render nothing
  if (!isOpen) return null;

  return (
    <ModalOverlay data-testid="modal-overlay">
      <ModalContent data-testid="modal-content">
        <ModalTitle data-testid="modal-title">Confirmar exclusão</ModalTitle>
        <p data-testid="modal-message">
          Tem certeza de que deseja excluir esta tarefa?
        </p>
        <ButtonContainer data-testid="button-container">
          <ConfirmButton data-testid="confirm-button" onClick={onConfirm}>
            Excluir
          </ConfirmButton>
          <CancelButton data-testid="cancel-button" onClick={onClose}>
            Cancelar
          </CancelButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmDeleteModal;
