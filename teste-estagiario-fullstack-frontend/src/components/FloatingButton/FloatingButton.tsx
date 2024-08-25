// src/components/FloatingButton/FloatingButton.tsx
import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

interface FloatingButtonProps {
  onClick: () => void;
}

const Button = styled.button`
  position: absolute;
  bottom: 100px;
  right: 16px;
  background-color: #6200ee;
  color: #ffffff;
  border: none;
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
    background-color: #3700b3;
  }
`;

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FaPlus size={24} />
    </Button>
  );
};

export default FloatingButton;
