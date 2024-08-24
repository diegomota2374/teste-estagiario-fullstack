import React from "react";
import "./NotFound.css"; // Importa o arquivo de estilos

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Página Não Encontrada</p>
        <p className="not-found-description">
          Desculpe, a página que você está procurando não foi encontrada.
        </p>
        <a href="/" className="not-found-link">
          Voltar para a Página Inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
