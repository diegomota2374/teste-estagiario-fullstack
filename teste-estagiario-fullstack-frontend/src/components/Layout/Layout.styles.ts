import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #2c2c2c;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  flex: 1;
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
  }
`;

export const LogoutIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
