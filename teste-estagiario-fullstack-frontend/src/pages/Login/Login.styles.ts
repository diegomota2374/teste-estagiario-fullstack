import styled from "styled-components";

// Centered container for the login form
export const LoginContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  padding: 20px;
`;

// Login form container
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
`;

// Form title
export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #e0e0e0;
  text-align: center;
`;

// Form styling
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

// Form label
export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #e0e0e0;
`;

// Input fields
export const Input = styled.input`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #3a3a3a;
  color: #e0e0e0;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }
`;

// Submit button
export const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #6200ee;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #3700b3;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

// Error message
export const ErrorMessage = styled.p`
  color: #ff6f6f;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 16px;
  text-align: center;
`;

// Register button styling
export const RegisterButton = styled.button`
  margin-top: 20px;
  background: none;
  border: none;
  color: #6200ee; /* Accent color for the button text */
  font-size: 14px;
  cursor: pointer;
  background: none;

  &:hover {
    color: #3700b3; /* Darker hover color */
  }
`;
