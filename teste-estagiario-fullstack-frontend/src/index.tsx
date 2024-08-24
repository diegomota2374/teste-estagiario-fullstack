import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Se tiver um arquivo de estilos global
import { StrictMode } from "react";

// Cria uma raiz para a aplicação React e renderiza o componente App dentro dela
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
