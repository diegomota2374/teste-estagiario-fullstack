import styled from "styled-components";

// Container for the entire page
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
`;

// Main content area
export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

// Header section
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  color: #e0e0e0;
`;

// Title styling
export const Title = styled.h1`
  font-size: 24px;
  color: #e0e0e0;
  margin: 0;
`;

// Floating button positioning
export const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;
