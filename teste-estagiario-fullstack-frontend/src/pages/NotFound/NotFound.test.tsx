import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it("should render the NotFound container", () => {
    expect(screen.getByTestId("notfound-container")).toBeInTheDocument();
  });

  it("should render the NotFound content", () => {
    expect(screen.getByTestId("notfound-content")).toBeInTheDocument();
  });

  it("should display the title '404'", () => {
    expect(screen.getByTestId("notfound-title")).toHaveTextContent("404");
  });

  it("should display the message 'Página Não Encontrada'", () => {
    expect(screen.getByTestId("notfound-message")).toHaveTextContent(
      "Página Não Encontrada"
    );
  });

  it("should display the description", () => {
    expect(screen.getByTestId("notfound-description")).toHaveTextContent(
      "Desculpe, a página que você está procurando não foi encontrada."
    );
  });

  it("should have a link with text 'Voltar para a Página Inicial'", () => {
    const linkElement = screen.getByTestId("notfound-link");
    expect(linkElement).toHaveTextContent("Voltar para a Página Inicial");
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
