// src/components/ConfirmDeleteModal/ConfirmDeleteModal.styles.ts
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: #fff;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1f1f1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonBase = styled.button`
  flex: 1;
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

export const ConfirmButton = styled(ButtonBase)`
  background-color: #c0392b;
  &:hover {
    background-color: #a93226;
  }
`;

export const CancelButton = styled(ButtonBase)`
  background-color: gray;
  &:hover {
    background-color: #484848;
  }
`;
