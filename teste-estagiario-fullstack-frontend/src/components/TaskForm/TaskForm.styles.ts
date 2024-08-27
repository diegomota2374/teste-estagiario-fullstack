// src/components/TaskForm/TaskForm.styles.ts
import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #282828; /* Fundo do formulário */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const FormTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #ffffff;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #e0e0e0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #3c3c3c;
  border-radius: 4px;
  background-color: #1f1f1f;
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #1e90ff; /* Azul claro */
    background-color: #2c2c2c;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #3c3c3c;
  border-radius: 4px;
  background-color: #1f1f1f;
  color: #ffffff;
  font-size: 1rem;
  resize: vertical; /* Permite redimensionar verticalmente */

  &:focus {
    outline: none;
    border-color: #1e90ff; /* Azul claro */
    background-color: #2c2c2c;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff6f6f; /* Vermelho para erros */
  font-size: 0.875rem;
  margin-top: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  width: 48%;
  padding: 12px;
  background-color: #6200ee;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #3700b3;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;
export const CancelButton = styled.button`
  width: 48%; /* Mesmo tamanho que o SubmitButton */
  padding: 10px;
  background-color: #6c757d; /* Cor cinza */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a6268;
  }
`;
