// src/components/BackButton/BackButton.tsx
import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

interface BackButtonProps {
  onClick: () => void;
}

const Button = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;

  &:hover {
    color: #1e90ff; /* Cor ao passar o mouse */
  }
`;

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FaArrowLeft />
    </Button>
  );
};

export default BackButton;
