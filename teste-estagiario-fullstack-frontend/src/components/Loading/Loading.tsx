import React from "react";
import {
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
} from "./Loading.styles";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <LoadingText>Carregando...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
