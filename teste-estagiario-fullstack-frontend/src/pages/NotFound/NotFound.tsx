// src/pages/NotFound/NotFound.tsx
import React from "react";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundMessage,
  NotFoundDescription,
  NotFoundLink,
} from "./NotFound.styles";

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer data-testid="notfound-container">
      <NotFoundContent data-testid="notfound-content">
        <NotFoundTitle data-testid="notfound-title">404</NotFoundTitle>
        <NotFoundMessage data-testid="notfound-message">
          Página Não Encontrada
        </NotFoundMessage>
        <NotFoundDescription data-testid="notfound-description">
          Desculpe, a página que você está procurando não foi encontrada.
        </NotFoundDescription>
        <NotFoundLink href="/" data-testid="notfound-link">
          Voltar para a Página Inicial
        </NotFoundLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound;
