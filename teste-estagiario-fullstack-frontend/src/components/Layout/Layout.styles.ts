import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Full viewport height
`;

export const Header = styled.header`
  background-color: #2c2c2c;
  padding: 16px;
  display: flex;
  justify-content: space-between; // Space between elements
  align-items: center; // Center vertically
  @media (min-width: 600px) {
    padding: 16px 100px 16px 100px;
  }
`;

export const UserName = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  letter-spacing: 1.5px;
  margin: 0;
`;

export const Footer = styled.footer`
  background-color: #2c2c2c;
  padding: 16px;
  text-align: center;
`;

export const MainContent = styled.main`
  flex: 1; // Fill available space
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 1rem;

  &:hover {
    color: #6200ee;
    &::before {
      content: "Sair"; // Insert "Sair" on hover
      color: #6200ee;
      font-size: 1rem;
      margin-right: 8px;
    }
  }
`;

export const LogoutIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
