// src/components/ConfirmDeleteModal/ConfirmDeleteModal.tsx
import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./ConfirmDeleteModal.styles";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Confirmar exclusão</ModalTitle>
        <p>Tem certeza de que deseja excluir esta tarefa?</p>
        <ButtonContainer>
          <ConfirmButton onClick={onConfirm}>Sim, excluir</ConfirmButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmDeleteModal;
