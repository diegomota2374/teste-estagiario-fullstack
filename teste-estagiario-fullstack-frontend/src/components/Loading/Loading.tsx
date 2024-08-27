// src/components/Loading/Loading.tsx

import {
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
} from "./Loading.styles";

const Loading: React.FC = () => {
  return (
    <LoadingContainer data-testid="loading-container">
      <LoadingSpinner data-testid="loading-spinner" />
      <LoadingText data-testid="loading-text">Carregando...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
