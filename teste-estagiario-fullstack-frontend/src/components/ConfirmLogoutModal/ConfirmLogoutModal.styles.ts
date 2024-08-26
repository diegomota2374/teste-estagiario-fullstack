import styled from "styled-components";

// The overlay that covers the screen when the modal is open
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); // Slightly darker background for better focus
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Content area of the modal
export const ModalContent = styled.div`
  background: #333; // Darker background for the modal
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: #fff; // White text for better contrast
`;

// Title of the modal
export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1f1f1; // Lighter color for the title
`;

// Container for buttons
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

// Base styles for buttons
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

// Confirm button style
export const ConfirmButton = styled(ButtonBase)`
  background-color: #c0392b; // Red background for delete confirmation
  &:hover {
    background-color: #a93226; // Darker red on hover
  }
`;

// Cancel button style
export const CancelButton = styled(ButtonBase)`
  background-color: #2980b9; // Blue background for cancellation
  &:hover {
    background-color: #1f618d; // Darker blue on hover
  }
`;
