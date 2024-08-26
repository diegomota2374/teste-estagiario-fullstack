import styled from "styled-components";

// Container for the register form, centered in the viewport
export const RegisterContainerPage = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh; /* Full viewport height */
  background-color: #121212; /* Darker background color for the page */
  padding: 20px;
`;

// Container for the register form itself
export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  padding: 30px;
  background-color: #2c2c2c; /* Darker background */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Subtle shadow */
  max-width: 400px; /* Maximum width of the container */
  width: 100%; /* Ensure container fits within its parent */
`;

// Title of the register form
export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #e0e0e0; /* Light gray text color */
  text-align: center; /* Center align text */
`;

// Form element styling
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; /* Full width of the container */
  gap: 30px;
`;

// Label for form inputs
export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #e0e0e0; /* Light gray text color */
`;

// Input field styling
export const Input = styled.input`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #555; /* Darker border */
  border-radius: 4px;
  background-color: #3a3a3a; /* Darker input background */
  color: #e0e0e0; /* Light text color */
  font-size: 16px;
  width: 100%; /* Full width of the container */

  &:focus {
    border-color: #6200ee; /* Accent color on focus */
    outline: none;
  }
`;

// Button styling
export const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #6200ee; /* Darker accent color */
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  width: 100%; /* Full width of the container */

  &:hover {
    background-color: #3700b3; /* Darker hover color */
  }

  &:disabled {
    background-color: #555; /* Disabled state */
    cursor: not-allowed;
  }
`;

// Error message styling
export const ErrorMessage = styled.p`
  color: #ff6f6f; /* Error color */
  font-size: 14px;
  margin-top: -12px; /* Align with input field */
  margin-bottom: 16px;
  text-align: center; /* Center align error message */
`;
// Button styling for submit and cancel actions
const ButtonBase = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%; /* Full width of the container */
`;

// Cancel button styling
export const CancelButton = styled(ButtonBase)`
  background-color: gray; /* Lighter accent color */
  color: #ffffff;

  &:hover {
    background-color: #484848; /* Darker hover color */
  }
`;

// Button container styling
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Spacing between buttons */
  width: 100%;
  margin-top: 20px; /* Space above the buttons */
`;
