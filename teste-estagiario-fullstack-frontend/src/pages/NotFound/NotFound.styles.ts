import styled from "styled-components";

// Container for the entire page
export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 83vh; /* Full viewport height */
  background-color: #121212; /* Dark background color */
  color: #e0e0e0; /* Light text color */
  padding: 20px;
`;

// Content box for the not found message
export const NotFoundContent = styled.div`
  text-align: center; /* Center text */
  background-color: #1f1f1f; /* Slightly lighter dark background */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
`;

// Title for the 404 message
export const NotFoundTitle = styled.h1`
  font-size: 72px; /* Large title font size */
  margin: 0;
  color: #ff6f6f; /* Light red color for title */
`;

// Message text for the not found page
export const NotFoundMessage = styled.p`
  font-size: 24px;
  margin: 20px 0;
  color: #e0e0e0;
`;

// Description text for additional information
export const NotFoundDescription = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #b0b0b0; /* Slightly darker gray */
`;

// Link styling for the return button
export const NotFoundLink = styled.a`
  display: inline-block;
  font-size: 16px;
  color: #6200ee; /* Accent color */
  text-decoration: none; /* Remove underline */
  padding: 10px 20px;
  border: 1px solid #6200ee; /* Border to match link color */
  border-radius: 4px;
  background-color: #1f1f1f;

  &:hover {
    background-color: #6200ee; /* Highlight background on hover */
    color: #ffffff; /* Change text color to white on hover */
    text-decoration: none;
  }
`;
