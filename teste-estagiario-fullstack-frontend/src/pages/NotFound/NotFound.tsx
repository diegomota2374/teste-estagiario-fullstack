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
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundMessage>Página Não Encontrada</NotFoundMessage>
        <NotFoundDescription>
          Desculpe, a página que você está procurando não foi encontrada.
        </NotFoundDescription>
        <NotFoundLink href="/">Voltar para a Página Inicial</NotFoundLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound;
