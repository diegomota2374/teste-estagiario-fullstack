// src/components/ConfirmDeleteModal/ConfirmDeleteModal.styles.ts
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Escurecido o fundo */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #333; /* Escurecido o fundo do modal */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: #fff; /* Cor do texto em branco para contraste */
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1f1f1; /* Cor do título em um tom mais claro */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonBase = styled.button`
  flex: 1; /* Faz os botões se expandirem igualmente */
  margin: 0 5px; /* Margem entre os botões */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px; /* Tamanho da fonte consistente */
`;

export const ConfirmButton = styled(ButtonBase)`
  background-color: #c0392b; /* Tom escuro de vermelho */
  &:hover {
    background-color: #a93226; /* Tom ainda mais escuro de vermelho */
  }
`;

export const CancelButton = styled(ButtonBase)`
  background-color: #2980b9; /* Tom escuro de azul */
  &:hover {
    background-color: #1f618d; /* Tom ainda mais escuro de azul */
  }
`;
