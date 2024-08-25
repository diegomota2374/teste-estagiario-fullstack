// src/components/Layout/Layout.tsx
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o container ocupe pelo menos 100% da altura da viewport */
`;

const Header = styled.header`
  background-color: #1f1f1f;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: #1f1f1f;
  padding: 16px;
  text-align: center;
`;

const MainContent = styled.main`
  flex: 1; /* Permite que o conteúdo principal expanda para preencher o espaço disponível */
`;

const Button = styled.button`
  background-color: #6200ee;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #3700b3;
  }
`;

const LogoutButton = styled(Button)`
  margin-left: auto;
  background-color: #bb86fc;

  &:hover {
    background-color: #3700b3;
  }
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <Container>
      <Header>
        <h1>Minha Aplicação</h1>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </Header>
      <MainContent>{children}</MainContent>
      <Footer>© 2024 Minha Aplicação. Todos os direitos reservados.</Footer>
    </Container>
  );
};

export default Layout;
