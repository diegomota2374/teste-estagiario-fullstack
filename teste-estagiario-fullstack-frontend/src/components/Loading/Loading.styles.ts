import styled from "styled-components";

// Container for the loading screen, centers content and provides dark background
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333; /* Dark background color */
`;

// Spinner element with a rotating animation
export const LoadingSpinner = styled.div`
  border: 8px solid #555; /* Darker grey for background */
  border-top: 8px solid #fff; /* White for the spinning part */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Text displayed below the spinner
export const LoadingText = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: #fff; /* White text color */
  font-weight: 500;
`;
